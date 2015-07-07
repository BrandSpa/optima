<?php namespace Api;

Use Optima\User;
use Response;
use Session;
use Input;

class UsersController extends \BaseController {

  public function index()
  {
    $collection = User::all();
    return Response::json($collection, 200);
  }

  public function show($id)
  {
    $model = User::find($id);
    return Response::json($model, 200);
  }
}