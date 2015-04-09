<?php namespace Optima\Providers;

use Illuminate\Support\ServiceProvider;

class StorageServiceProvider extends ServiceProvider {

	public function register() 
	{
		$this->app->bind(
			'Optima\Repositories\Company\CompanyRepositoryInterface', 
			'Optima\Repositories\Company\EloquentCompanyRepository'
		); 

		$this->app->bind(
			'Optima\Repositories\Contact\ContactRepositoryInterface', 
			'Optima\Repositories\Contact\EloquentContactRepository'
		); 

		$this->app->bind(
			'Optima\Repositories\Product\ProductRepositoryInterface', 
			'Optima\Repositories\Product\EloquentProductRepository'
		); 

		$this->app->bind(
			'Optima\Repositories\Service\ServiceRepositoryInterface', 
			'Optima\Repositories\Service\EloquentServiceRepository'
		);

		$this->app->bind(
			'Optima\Repositories\Quotation\QuotationRepositoryInterface', 
			'Optima\Repositories\Quotation\EloquentQuotationRepository'
		);  
	}
	
} 