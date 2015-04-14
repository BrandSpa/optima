<?php namespace Api;

Use Optima\Company;
use Response;
use Session;
use Input;

class CompaniesController extends \BaseController {
	
	protected $entity;
	protected $relationships = ['contacts'];

	public function __construct(Company $model)
	{
		$this->entity = $model;
	}

	public function index() 
	{
		$offset = Input::get('offset');
		$query = Input::get('query');
		
		if ($query) {
			$this->search($query);
		}
		
		$collection = Company::takeAndSkip(10, $offset);

		return Response::json($collection, 200);
	}

	public function show($id) 
	{
		$model = Company::with($this->relationships)->find($id);
		return Response::json($model, 200);
	}

	public function search($query) 
	{
		$collection = Company::search($query);
		return Response::json($collection, 200);
	}
}