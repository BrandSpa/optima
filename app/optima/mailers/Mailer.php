<?php namespace Optima\Mailers;

use Mail;

abstract class Mailer {

	public function send($view, $data, $recipients) 
	{
		$data = compact('data');
		Mail::send($view, $data, function($message) use($recipients) {
			$message->subject('Avante cotizaci');
			$message->from('comercial@avante.cc', 'Avante');
			$message->to("alejandro@thebrandspa.co");

			if ($recipients) {
				$message->cc($recipients);
			}
		});
		
	}
}