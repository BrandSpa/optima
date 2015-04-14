<?php namespace Api;

use Optima\Quotation;
use Response;
use Input;

class QuotationServiceController extends \Controller {

  protected $entity;

  public function __construct(Quotation $model)
  {
    $this->entity = $model;
  }
  
  public function index($quoationId)
  {
  	$quotation = $this->entity->find($quoationId);
  	if ($quotation) {
  		$collection = $quotation->services()->get();
  		return Response::json($collection, 200);
  	}
  }

  public function show($quoationId, $serviceId)
  {

  }

  public function store($quoationId)
  {
  	$serviceId = Input::get('service_id');

    $quotation = $this->entity->find($quoationId);
    $quotation->services()->attach($serviceId);
    $model = $quotation->services->contains($serviceId);

    return Response::json($quotation, 201);
  }

  public function destroy($quoationId, $serviceId)
  {
    $quotation = $this->entity->find($quoationId);
    $quotation->services()->detach($serviceId);
    $model = $quotation->services->contains($serviceId);
    
   	return Response::json(null, 204);
  }

}
