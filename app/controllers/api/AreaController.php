<?php namespace Api;

use Input;
use Optima\Area;
use Response;

class AreaController extends \BaseController {

    protected $entity;

    public function __construct(Area $model)
	{
		$this->entity = $model;
	}

    public function index()
	{
        // $collection = $this->entity::orderBy('id', 'DESC')->get();
        // return Response::json($collection, 200);
    }

    public function store()
    {
        $data = Input::all();
        $modelStored = $this->entity->store($data);
        return Response::json($modelStored, 200);
    }

}
