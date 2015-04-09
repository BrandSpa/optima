<?php namespace Optima\Providers;

use Illuminate\Support\ServiceProvider;

class EventsServiceProvider extends ServiceProvider {

	public function boot()
	{
		require_once app_path().'/optima/events/QuotationEvent.php';
	}

	public function register()
	{

	}
}

