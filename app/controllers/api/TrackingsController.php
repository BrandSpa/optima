<?php namespace Api;

Use Optima\Tracking;
use Response;
use Session;
use Input;

class TrackingsController extends \BaseController {

  public function index()
  {
    $offset = Input::get('offset');
    $query = Input::get('query');
    $quotation_id = Input::get('quotation_id');
    $solicitudes_id = Input::get('solicitudes_id');

    if (Input::has('query')) {
      $collection = Tracking::search($query);
      return Response::json($collection, 200);
    }

    if (Input::has('quotation_id')) {
      $collection = Tracking::with(['user','contact', 'todos', 'todos.user'])->orderBy('id', 'DESC')->where('quotation_id', $quotation_id)->get();
      return Response::json($collection, 200);
    }

    if (Input::has('solicitudes_id')) {
      $collection = Tracking::with(['user','contact', 'todos', 'todos.user'])->orderBy('id', 'DESC')->where('solicitudes_id', $solicitudes_id)->get();
      return Response::json($collection, 200);
    }

    $collection = Tracking::takeAndSkip(10, $offset);
    return Response::json($collection, 200);
  }

  public function show($id)
  {
    return Tracking::find($id);
  }

  public function store()
  {
    $data = Input::all();
    $model = Tracking::store($data);

    if (isset($model->id)) {
      $model = Tracking::with(['contact', 'user'])->find($model->id);
      return Response::json($model, 201);
    }

    return Response::json($model, 400);
  }

  public function update($id)
  {
    $data = Input::all();
    $model = Tracking::find_and_update($id, $data);

    if (isset($model->id)) {
      return Response::json($model, 200);
    }

    return Response::json($model, 400);
  }

}
