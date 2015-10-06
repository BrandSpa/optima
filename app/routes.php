<?php

Route::filter('etags', function($route, $request, $response)
{
  $response->setEtag(md5($response->getContent()));
	$response->isNotModified($request);
	return;
});

Route::get('login', 'UsersController@getLogin');
Route::post('login', 'UsersController@postLogin');
Route::get('logout', 'UsersController@logout');
Route::get('companies/contacts', 'Api\CompaniesController@contacts');
Route::get('quotations/{id}/pdf/{hash}', 'QuotationsController@showPdf');

Route::get('todos/pending/mail', 'Api\TodosController@pending');
Route::get('todos/pendinguser/mail', 'Api\TodosController@pendingByUser');

Route::group(['before' => ['auth'], 'after' => 'etags'], function()
{

	Route::get('', 'PagesController@quotations');

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
		Route::resource('quotations.services', 'QuotationServiceController');
		Route::post('quotations/{id}/sendmail', 'QuotationsController@sendMail');

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
