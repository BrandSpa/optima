<?php namespace Api;
use Auth;
use Input;
use Activity;
use Response;
use Optima\Notifies\Notify;
use Notification;

class NotificationsController extends \BaseController
{
  protected $notify;

  public function __construct() 
  {
    $this->notify = new Notify;
  }

  public function index()
  {
  	$user = Auth::user()->id; 
    $collection = Notification::where('user_id', $user)->where('read', 0)->get();
    return Response::json($collection, 200);
  }

  public function store()
  {
    $data = Input::all();
    $model = Notification::create($data);
    if (isset($model->id)) {

      $this->notify->publish('notifications', 'notification', $model->message ."para ". $model->user->name ." ". $model->user->lastname);
      return Response::json($model, 200);
    }
  }

  public function update($id)
  {
    $readed = Input::get('readed');
    $data = Input::all();

    if (Input::has('readed')) {
       $collection = Notification::where('user_id', Auth::user()->id)->where('read', 0)->update(['read' => 1]);
       return Response::json('readed', 200);
     } 

     $model = Notification::find_and_update($id, $data);
     return Response::json($model, '200');


  }
}