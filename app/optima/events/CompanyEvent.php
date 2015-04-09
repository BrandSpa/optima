<?php Optima\Events;

use Optima\Company;

class CompanyEvent {

	public function __construct() 
	{
		
	}

	public function onStored() 
	{
		Session::put('company_id', $company_id);
		if (Session::has('company_id')) {
			return Response::json(['status' => 'ok']);
		}
	}

	public function subscribe() 
	{
		
	}
}

Event::listen('company.session', function($company_id)
{
	Session::put('company_id', $company_id);
	if (Session::has('company_id')) {
		return Response::json(['status' => 'ok']);
	}
});