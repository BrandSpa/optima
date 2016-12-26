<?php namespace Api;

Use User;
use Response;
use Session;
use Input;

class UsersController extends \BaseController {

  public function index()
  {
    $collection = new User;
    $email = Input::get('email');

    if(Input::has('email')) {
      $collection->where('email', $email);
    }

    return Response::json($collection->get(), 200);
  }

  public function show($id)
  {
    $model = User::find($id);
    return Response::json($model, 200);
  }
}