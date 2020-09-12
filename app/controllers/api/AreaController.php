<?php namespace Api;

use Input;
use Area;
use Response;

class AreaController extends \BaseController {

    public function index()
	{
        $collection = Area::orderBy('id', 'DESC')->get();
        return Response::json($collection, 200);
    }

    public function store()
    {
        $data = Input::all();
        $model = Area::create($data);
        return Response::json($model, 200);
    }

}
