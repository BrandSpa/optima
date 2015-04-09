<?php namespace Api;

Use Optima\Company;
use Response;
use Session;
use Input;

class CompaniesController extends \BaseController {

	public function index() 
	{
		$offset = Input::get('offset');
		$query = Input::get('query');
		
		if ($query) {
			$collection = Company::search($query);
			return Response::json($collection, 200);
		}
		
		$collection = Company::takeAndSkip(10, $offset);
		return Response::json($collection, 200);
	}

	public function show($id) 
	{
		$model = Company::with('contacts')->find($id);
		return Response::json($model, 200);
	}

	public function store() 
	{	
		$data = Input::all();	
		$model = Company::store($data);

		if (isset($model->id)) {
				return Response::json($model, 200);
		}

		return Response::json($model, 400);
	}

	public function update($id) 
	{
		$data = Input::all();
		$model = Company::find_and_update($id, $data);

		if (isset($model->id)) {
			return Response::json($model, 200);
		}

		return Response::json($model, 400);
	}

	public function search($query) 
	{
		$collection = Company::search($query);
		return Response::json($collection, 200);
	}
}