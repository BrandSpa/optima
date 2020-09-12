<?php namespace Api;

use Optima\Solicitudes;
use Input;
use Response;
use Validator;
use Crypt;
use Mail;

class SolicitudesController extends \BaseController {

	protected $entity;
	protected $relationships = ['contact','company', 'company.contacts', 'user'];

	public function __construct(Solicitudes $model)
	{
		$this->entity = $model;
	}

	public function index()
	{
		$skip = Input::get('offset');
		$q = Input::get('query');
		$status = Input::get('status');
		$priority = Input::get('priority');
		$advisor = Input::get('advisor');
		$client_type = Input::get('client_type');
		$quotation_type = Input::get('quotation_type');
		$date_start = Input::get('date_start');
		$date_end = Input::get('date_end');

		$collection = new Solicitudes;

		if( Input::has('status') && $status != "" ) {
			$collection = $collection->where("status", $status);
		}

		if( Input::has('priority') && $priority != "" ) {
			$collection = $collection->where("priority", $priority);
		}

		if( Input::has('advisor') && $advisor != "" ) {
			$collection = $collection->where("advisor", $advisor);
		}

		if( Input::has('client_type') && $client_type != "" ) {
			$collection = $collection->where("client_type", $client_type);
		}

		if( Input::has('quotation_type') && $quotation_type != "" ) {
			$collection = $collection->where("type", $quotation_type);
		}

		if(Input::has('date_start') && Input::has('date_end')) {
			$collection = $collection->whereRaw("quotations.created_at BETWEEN '$date_start' AND '$date_end' ");
		}


		if(Input::has('query') && $q != "") {
			$collection = $collection
				->where(function($query) use($q) {
					$query
					->where("id", "like", "$q%")
					->orWhereHas('contact', function($subquery) use($q){
						$subquery->where('name', 'like', "%$q%");
					})
					->orWhereHas('company', function($subquery) use($q){
						$subquery->where('name', 'like', "%$q%");
					});
				});
		}

		$collection = $collection->with('company', 'contact', 'user', 'asesor', 'area')
			->take(10)
			->skip($skip)
			->orderBy('id', 'DESC')
			->get();

		return Response::json($collection, 200);
	}

	public function show($id)
	{
		$model =  $this->entity->with($this->relationships)->find($id);
		return Response::json($model, 200);
	}

	public function search($type, $query)
	{
		$collection = Solicitudes::search($type, $query);
		return Response::json($collection, 200);
	}

	/**
	 * save model to database
	 * @return Response json
	 */
	public function store()
	{
		$id = Input::get('solicitudes_id');
		$service_id = Input::get('service_id');

		$data = Input::all();

		if (Input::has('service_id')) {
			$model = Solicitudes::attachService($id, $service_id);
			return Response::json($model, 201);
		}

		$modelStored = $this->entity->store($data);
		$storedId = $modelStored->id;
		$model = Solicitudes::with(['company', 'contact'])->find($storedId);
		return Response::json($model, 201);
	}

	public function update($id)
	{
		$data = Input::all();

		$validator = Validator::make($data, $this->entity->rules);
		$model = $this->entity->find($id);
		$fieldsToCheck = [
			$model->type,
			$model->type_category,
			$model->client_type,
			$model->found_us,
			$model->offer,
			$model->advisor,
		];

		if ($validator->passes()) {
			if($data['status'] != "Borrador") {
				if ($this->checkFields($fieldsToCheck)) {
					if($data['status'] == 'Enviada') $this->entity->diffCreateAndSent($id);
					$model->update($data);
				} else {
					return Response::json(['complete los filtros'], 400);
				}
			} else {
				$model->update($data);
			}

			$modelUpdated = $this->entity->with($this->relationships)->find($id);
			return Response::json($modelUpdated, 200);
		}

		return Response::json($validator->errors()->all(), 400);
	}

	public function checkFields($fields)
  {
    foreach ($fields as $field) {
      if ( !$field ) {
        return false;
      }
    }
    return true;
  }

	/**
	 * POST send mail to contact mail
	 * @return Response json object
	 */
	public function sendMail($id)
	{
		$quotation = $this->entity->find($id);
		$fieldsToCheck = [
			$quotation->type,
			$quotation->type_category,
			$quotation->client_type,
			$quotation->found_us,
			$quotation->offer,
			$quotation->advisor,
		];

		if ($this->checkFields($fieldsToCheck)) {
			$quo = $this->entity->with($this->relationships)->find($id);
			$this->sendQuotation($quotation);
			return Response::json($quo, 200);
		
		} else {
			return Response::json(["Ingrese todos los campos"], 400);
		}
	}

	/**
	 * get data from quotation
	 * @param  object $quotation
	 * @return false
	 */
	public function sendQuotation($quotation)
	{
		$email = $quotation->contact->email;
		$recipient_1 = $quotation->mail_recipient_1;
		$recipient_2 = $quotation->mail_recipient_2;
		$id = $quotation->id;

		$data = [
			"name" => $quotation->contact->name,
			"lastname" => $quotation->contact->lastname,
			"url" => $quotation->id."/pdf/".Crypt::encrypt($quotation->id),
			"user" => $quotation->user->name." ".$quotation->user->lastname,
			"message" => $quotation->mail_message,
			"type" => $quotation->type,
			"service_approval" => $quotation->service_approval
		];

		if($email) {
			Mail::send('emails.quotation', compact('data'), function($message) use($recipient_1, $recipient_2, $id) {
				$message->subject('RentAdvisor cotización '.$id);
				$message->to($recipient_1);
				if (!empty($recipient_2)) $message->cc($recipient_2);
			});
		}
	}

	public function duplicate()
	{
		$model = Solicitudes::duplicate($id);
		return Redirect::to('/solicitudes/'.$model->id);
	}

	public function rethink($id)
	{
		$model = Solicitudes::duplicate($id);
		$model->rethink_from = $id;
		$model->save();

		return Redirect::to('/solicitudes/'.$model->id);
	}

}
