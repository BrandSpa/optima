<?php namespace Api;

use Auth;
use Todo;
use Response;
use Session;
use Input;
use Mail;

class TodosController extends \BaseController {

  public function index() 
  {
    $user_id = Auth::user()->id;
    $where = Input::get('where');

    if (isset($where)) {
    	$collection = Todo::with(['user', 'assigned'])->whereRaw($where)->orderBy('id', 'DESC')->get();
    } else {
    	$collection = Todo::with(['user', 'tracking', 'assigned'])->where('user_id', $user_id)->where('completed', NULL)->orderBy('id', 'DESC')->get();
    }
    
    return Response::json($collection, 200);
  }

  public function show($id) 
  {
    return Todo::with('user')->with('user')->find($id);
  }

  public function store() 
  {
    $data = Input::all(); 
    $model = Todo::store($data);

    if (isset($model->id)) {
    	$id = $model->id;
    	$modelNew = Todo::with('user')->find($id);
        return Response::json($modelNew, 201);
    }

    return Response::json($model, 400);
  }

  public function update($id) 
  {
    $data = Input::all();
    $Todo = Todo::find_and_update($id, $data);

    if (isset($Todo->id)) {
      return Response::json($Todo, 200);
    }

    return Response::json($Todo, 400);
  }

  public function search($query) 
  {
    $companies = Todo::search($query);
    return Response::json($companies, 200);
  }

  public function sendNotification($id){
  	$model = Todo::find($id);
  	$email = $model->user->email;
  	$data = $model;
  	Mail::send('emails.todos', compact('data'), function($message) use($email) {
				$message->subject('Tarea Asignada');
				$message->to($email);

	});
  }

  public function pending()
  {
  	$collection = Todo::with(['user', 'assigned'])->whereRaw("completed IS NULL")->orderBy('id', 'DESC')->get();
  	Mail::send('emails.todos_remains', compact('collection'), function($message) {
		$message->subject('Tareas pendientes');
		$message->to("ccomercial@avante.cc");
		$message->cc("alejandro@brandspa.com");
		
	});

  	return $collection;
  }

}