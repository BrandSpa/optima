<?php namespace Optima\Notifies;

use Pusher;

class Notify {

  protected $pusher;
  
  public function __construct()
  {
    $app_id = '55561';
    $app_key = '6685bdfde10b8bb15074';
    $app_secret = '242129c0731f347c8065';

    $this->pusher = new Pusher( $app_key, $app_secret, $app_id );
  }

  public function publish($channel, $event, $message)
  {
    $this->pusher->trigger( $channel, $event, ['message' => $message] );
  }
}