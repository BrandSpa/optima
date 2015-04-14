<?php namespace Api;

use Optima\Quotation;
use Input;
use Response;
use Validator;

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
		$query = Input::get('query');

		if (Input::has('query')) {
			$collection = $this->entity->search($query);
			return Response::json($collection, 200);
		}

		$collection = $this->entity->takeAndSkip(10, $skip);
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