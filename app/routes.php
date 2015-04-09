<?php

Route::get('login', 'UsersController@getLogin');
Route::post('login', 'UsersController@postLogin');
Route::get('logout', 'UsersController@logout');
Route::get('companies/contacts', 'Api\CompaniesController@contacts');
Route::get('quotations/{id}/pdf/{hash}', 'QuotationsController@showPdf');

Route::group(['before' => 'auth'], function(){

	Route::get('companies', 'PagesController@companies');
	Route::get('contacts', 'PagesController@contacts');
	Route::get('services', 'PagesController@services');
	Route::get('results', 'PagesController@results');
	Route::get('', 'PagesController@quotations');
	Route::get('quotations', 'PagesController@quotations');
	Route::get('search={query}', 'PagesController@quotations');
	Route::get('filters={filters}', 'PagesController@quotations');
	Route::get('quotations/{id}', 'PagesController@quotation');
	Route::get('companies/{id}/mails', 'CompaniesController@getMails');


	/*
	|-------------------------------------------------------------------------
	|	Quotations routes
	|-------------------------------------------------------------------------
	*/

	Route::get('quotations/{id}/pdfbn', 'QuotationsController@getPdfBn');
	Route::get('quotations/{id}/pdflogos', 'QuotationsController@getPdfLogos');
	
	Route::post('quotations/replicate/{id}', 'QuotationsController@getDuplicate');
	Route::get('quotations/{id}/rethink', 'QuotationsController@rethink');
	Route::get('quotations/{id}/duplicate', 'QuotationsController@duplicate');
	
	Route::post('quotations/{id}/sendmail', 'QuotationsController@sendMail');

	/*
	|-------------------------------------------------------------------------
	|	API v1
	|-------------------------------------------------------------------------
	*/
	Route::group(['prefix' => 'api/v1', 'namespace' => 'Api'], function(){

		Route::resource('companies', 'CompaniesController');
		Route::resource('products', 'ProductsController');
		Route::resource('contacts', 'ContactsController');
		Route::resource('quotations', 'QuotationsController');
		Route::resource('services', 'ServicesController');
		Route::resource('activities', 'ActivitiesController');
		Route::resource('notifications', 'NotificationsController');
		Route::resource('trackings', 'TrackingsController');
		Route::resource('todos', 'TodosController');
		Route::resource('users', 'UsersController');
		Route::resource('reports', 'ReportsController');

		Route::get('products/quotation', 'ProductsController');
		Route::post('products/{id}/duplicate', 'ProductsController@duplicate');
		Route::get('companies/search/{query}', 'CompaniesController@search');
		Route::get('contacts/search/{query}', 'ContactsController@search');
		Route::get('quotations/search/{type}/{query}', 'QuotationsController@search');
		// Route::get('results', 'QuotationsController@results');

	});

	/*
	|-------------------------------------------------------------------------
	|	Events
	|-------------------------------------------------------------------------
	*/
	Route::post('companies/session/{id}', function($id){
		Event::fire('company.session', [$id]);
	});

	Route::post('contacts/session/{id}', function($id){
		Event::fire('contacts.store', [$id]);
	});

});