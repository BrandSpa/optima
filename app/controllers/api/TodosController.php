<?php namespace Api;

use Auth;
use Todo;
Use Optima\User;
use Response;
use Session;
use Input;
use Mail;

class TodosController extends \BaseController {

  public function index()
  {
    $quotation_id = Input::get('quotation_id');
    $user_id = Input::get('user_id');

    $collection = new Todo;

    if( Input::has('quotation_id') && $quotation_id != "" ) {
			$collection = $collection->where("quotation_id", $quotation_id);
		}

    if( Input::has('user_id') && $user_id != "" ) {
			$collection = $collection->where("user_id", $user_id);
		}
      
    $collection = $collection
      ->with('user', 'tracking', 'assigned', 'company', 'tracking.quotation.company')
      ->orderBy('id', 'DESC')
      ->take(25)
      ->get();
    
    return Response::json($collection, 200);
  }

  public function show($id)
  {
    return Todo::with('user')->with('user')->find($id);
  }

  public function store()
  {
    $data = Input::all();
    $data['user_id'] = Auth::user()->id;
    $model = Todo::store($data);

    if (isset($model->id)) {
    	$id = $model->id;
    	$modelNew = Todo::with(['user', 'company'])->find($id);
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
    
    return $model;
  }

  public function pending()
  {
  	$collection = Todo::with(['user', 'assigned'])
      ->whereRaw("completed IS NULL")
      ->orderBy('id', 'DESC')->get();

  	Mail::send('emails.todos_remains', compact('collection'), function($message) {
  		$message->subject('Tareas pendientes');
  		$message->to("ccomercial@avante.cc");
  		$message->cc("alejandro@brandspa.com");
	  });

  	return $collection;
  }

  public function pendingByUser()
  {
    $users = User::all();
    foreach ($users as $user) {
      $collection = Todo::where('user_id', $user->id)->where('completed', NULL)->get();

      Mail::send('emails.todos_remains', compact('collection'), function($message) use($user) {
        $message->subject('Tareas pendientes');
        $message->cc($user->email);
      });

    }
  }

}
