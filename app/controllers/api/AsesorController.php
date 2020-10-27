<?php namespace Api;

use Input;
use Asesor;
use Response;

class AsesorController extends \BaseController {

    public function index()
	{
        $collection = Asesor::orderBy('id', 'DESC')->get();
        return Response::json($collection, 200);
    }

    public function store()
    {
        $data = Input::all();
        $model = Asesor::create($data);
        return Response::json($model, 200);
    }

}
