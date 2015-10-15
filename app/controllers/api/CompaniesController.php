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
		$collection = new Company;

		if (Input::has('query')) {
			$collection = $collection->where(function($query) use($q) {
				$query
				->where('name', 'like', "%$q%")
				->orWhereHas('contacts', function($subquery) use($q){
						$subquery->where('name', 'like', "%$q%");
					});
			});
		}

		$collection = $collection->take(30)->skip($offset)->get();
		return Response::json($collection, 200);

	}

	public function show($id)
	{
		$model = Company::with($this->relationships)->find($id);
		return Response::json($model, 200);
	}


}