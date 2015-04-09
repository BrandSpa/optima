<?php namespace Api;

use Response;
use Log;
use Input;

class LogsController extends \BaseController {

  public function store()
  {
    $data = Input::all();
    $model = Log::create($data);
    return Response::json($model, 200);
  }
}