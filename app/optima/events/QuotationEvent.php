<?php namespace Optima\Events;

use Optima\Quotation;
use Optima\notifies\QuotationNotify;
use Event;
use Auth;
use Session;
use Response;
use Mail;
use Pusherer;

class QuotationEvent {
	
	protected $notify;
	
	public function __construct(QuotationNotify $notify) 
	{
		$this->notify = $notify;		
	}

	public function onStoreContact($contact_id, $user_id, $company_id) 
	{
		$quotation = new Quotation;
		$quotation->user_id = $user_id;
		$quotation->company_id =  $company_id;
		$quotation->contact_id = $contact_id;

		if($quotation->save())
		{
			Session::put('quotation_id', $quotation->id);
			$this->notify->stored();
		}
	}

	public function subscribe($events) 
	{
		$events->listen('contact.store', 'Optima\Events\QuotationEvent@onStoreContact');
	}
}

Event::listen('company.session', function($company_id)
{
	Session::put('company_id', $company_id);
	if (Session::has('company_id')) {
		return Response::json(['status' => 'ok']);
	}
});

Event::listen('contacts.store', function($contact_id)
{
	$quotation = new Quotation;
	$quotation->user_id = Auth::user()->id;
	$quotation->company_id = Session::get('company_id');
	$quotation->contact_id = $contact_id;
	
	if($quotation->save())
	{
		Session::put('quotation_id', $quotation->id);

		$message = Auth::user()->name ." creo la cotización ". $quotation->id;
    Pusherer::trigger('optima-quotation', 'quotation-stored', array( 'message' => $message ));
	}
});






	
