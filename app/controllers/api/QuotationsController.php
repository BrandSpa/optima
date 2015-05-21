<?php namespace Api;

use Optima\Quotation;
use Input;
use Response;
use Validator;
use Crypt;
use Mail;

class QuotationsController extends \BaseController {

	protected $entity;
	protected $relationships = ['company', 'company.contacts', 'user'];

	public function __construct(Quotation $model)
	{
		$this->entity = $model;
	}

	public function index()
	{
		$skip = Input::get('offset');
		$q = Input::get('query');
		$status = Input::get('status');
		$advisor = Input::get('advisor');
		$client_type = Input::get('client_type');

		$collection = new Quotation;

		if(Input::has('query')) {
			$collection = $collection->with('company', 'contact')
			->where("id", "like", "$q%")
			->orWhereHas('contact', function($query) use($q) {
				$query->where('name', 'like', "%$q%");
			})
			->orWhereHas('company', function($query) use($q) {
				$query->where('name', 'like', "%$q%");
			});
		}

		if( Input::has('status') && $status != "" ) {
			$collection = $collection->where("status", $status);
		}

		if( Input::has('advisor') && $advisor != "" ) {
			$collection = $collection->where("advisor", $advisor);
		}

		if( Input::has('client_type') && $client_type != "" ) {
			$collection = $collection->where("client_type", $client_type);
		}

		$collection = $collection->with('company', 'contact', 'user')->take(50)->skip($skip)->orderBy('id', 'DESC')->get();

		return Response::json($collection, 200);
	}

	public function show($id)
	{
		$model =  $this->entity->with($this->relationships)->find($id);
		return Response::json($model, 200);
	}

	public function search($type, $query)
	{
		$collection = Quotation::search($type, $query);
		return Response::json($collection, 200);
	}

	/**
	 * save model to database
	 * @return Response json
	 */
	public function store()
	{
		$id = Input::get('quotation_id');
		$service_id = Input::get('service_id');

		$data = Input::all();

		if (Input::has('service_id')) {
			$model = Quotation::attachService($id, $service_id);
			return Response::json($model, 201);
		}

		$modelStored = $this->entity->store($data);
		$storedId = $modelStored->id;
		$model = Quotation::with(['company', 'contact'])->find($storedId);
		return Response::json($model, 201);
	}

	public function send($id)
	{
		$model = Quotation::find($id);
		$this->mailer->sendQuotation($model);
		$model->created_sent_diff = $model->diffCreateAndSent();
		return Response::json($model, 200);
	}
	
	/**
	 * POST send mail to contact mail
	 * @return Response json object
	 */
	public function sendMail($id)
	{
		$quotation = $this->entity->find($id);
		$this->sendQuotation($quotation);
		return Response::json($quotation, 200);
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
			Mail::send('emails.quotation', compact('data'), function($message) use($email, $recipient_1, $recipient_2, $id) {
				$message->subject('Avante cotización '.$id);
				$message->to($email);

				if (!empty($recipient_1)) $message->cc($recipient_1);
				if (!empty($recipient_2)) $message->cc($recipient_2);
			});
		}
	}

	public function duplicate()
	{
		$model = Quotation::duplicate($id);
		return Redirect::to('/quotations/'.$model->id);
	}

	public function rethink($id)
	{
		$model = Quotation::duplicate($id);
		$model->rethink_from = $id;
		$model->save();

		return Redirect::to('/quotations/'.$model->id);
	}


}
