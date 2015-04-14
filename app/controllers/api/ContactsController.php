<?php namespace Api;

use Response;
use Session;
use Optima\Contact;
use Optima\Quotation;
use Input;

class ContactsController extends \BaseController {
	
	protected $entity;

	public function __construct(Contact $model)
	{
		$this->entity = $model;
	}
	
	public function index()
	{
		$company = Input::get('company_id');
		$quotation = Input::get('quotation_id');
		$query = Input::get('query');
		$offset = Input::get('offset');
		
		if (Input::has('company_id')) {
			$collection = Contact::where('company_id', $company)->get();
			return Response::json($collection, 200);
		}

		if (Input::has('quotation_id')) {
			$collection = Quotation::find($quotation)->company->contacts()->get();
			return Response::json($collection, 200);
		}

		$collection = Contact::takeAndSkip(10, $offset);
		return Response::json($collection);
	}

	public function show($id)
	{
		$quotation_id = Input::get('quotation_id');

		if (Input::has('quotation_id')) {
			$model = Contact::find($id);
			$model->quotation()->where('quotation_id', $quotation_id)->get();
			return Response::json($model, 200);
		}

		$model = Contact::with(['company'])->find($id);
		return Response::json($model, 200);
	}

	public function store()
	{
		$data = Input::all();
		$model = Contact::store($data);
		
		if (isset($model->id)) {
			return Response::json($model, 200);
		}

		return Response::json($model, 400);
	}

	public function update($id)
	{
		$data = Input::all();
		$model = Contact::findAndupdate($id, $data);

		if ($model->id) {
			return Response::json($model, 200);
		}

		return Response::json($model, 304);
		
	}

	public function search($query) 
	{
		$collection = Contact::search($query);
		return Response::json($collection, 200);
	}

}