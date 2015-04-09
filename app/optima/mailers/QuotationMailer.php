<?php namespace Optima\Mailers;
use Auth;
use Crypt;
use Mail;
use Optima\Quotation;
use DateTime;

class QuotationMailer extends Mailer {
	
	public function sendQuotation($quotation) 
	{
		$email = $quotation->contact->email;
		$recipient_1 = $quotation->mail_recipient_1;
		$recipient_2 = $quotation->mail_recipient_2;
		$id = $quotation->id;

		$data = [
			"name" => $quotation->contact->name, 
			"lastname" => $quotation->contact->lastname, 
			"url" => $quotation->id."/pdf/".Crypt::encrypt($quotation->id), 
			"user" => $quotation->user->name." ".$quotation->user->lastname,
			"message" => $quotation->mail_message,
			"type" => $quotation->type
		];

		if($email) {
			Mail::send('emails.quotation', compact('data'), function($message) use($email, $recipient_1, $recipient_2, $id) {
				$message->subject('Avante cotización '.$id);
				$message->to($email);	
				
				if (!empty($recipient_1)) $message->cc($recipient_1);
				if (!empty($recipient_2)) $message->cc($recipient_2);

			});
		}

		
	}
}