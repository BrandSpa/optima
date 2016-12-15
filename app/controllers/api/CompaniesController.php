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
		$q = Input::get('query');
		$qName = Input::get('query_name');
		$collection = new Company;

		if (Input::has('query_name')) {
			$collection = $collection->where('name', 'like', "%$qName%");
		}

		if (Input::has('query')) {
			$collection = $collection->where('name', 'like', "%$q%");
		}

		$collection = $collection
			->with('contacts')
			->take(15)
			->skip($offset)
			->orderBy('id', 'DESC')
			->get();

		return Response::json($collection, 200);

	}

	public function show($id)
	{
		$model = Company::with($this->relationships)->find($id);
		return Response::json($model, 200);
	}


}
