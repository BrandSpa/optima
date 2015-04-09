<?php namespace Optima\Providers;

use Illuminate\Support\ServiceProvider;

class MacrosServiceProvider extends ServiceProvider {

	public function boot()
	{
		require_once app_path().'/optima/macros/Bootstrap3.php';
	}

	public function register()
	{

	}
}

