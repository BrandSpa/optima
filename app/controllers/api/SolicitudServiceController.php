<?php namespace Api;

use Optima\Solicitudes;
use Optima\Service;
use Response;
use Input;

class SolicitudServiceController extends \Controller {

  protected $entity;

  public function __construct(Solicitudes $model)
  {
    $this->entity = $model;
  }
  
  public function index($solicitudId)
  {
  	$solicitudes = $this->entity->find($solicitudId);
  	if ($solicitudes) {
  		$collection = $solicitudes->services()->get();
  		return Response::json($collection, 200);
  	}
  }

  public function show($solicitudId, $serviceId)
  {

  }

  public function store($solicitudId)
  {
  	$serviceId = Input::get('service_id');

  	if (Input::has('service_id')) {
  	
	    $solicitud = $this->entity->find($solicitudId);
      $service = Service::find($serviceId);
	    $model = $solicitud->services->contains($solicitudId);

	    if (!$model) {
	    	$solicitud->services()->attach($serviceId);
	    	return Response::json($service, 201);
	    } else {
	    	return Response::json(["servicio ya fue agregado"], 400);
	    }	    
    }
    
    return Response::json(["error" => 'service id not present'], 400);
  }

  public function destroy($solicitudId, $serviceId)
  {
    $solicitud = $this->entity->find($solicitudId);
    $solicitud->services()->detach($serviceId);
    $model = $solicitud->services->contains($serviceId);
    
   	return Response::json(null, 204);
  }

}
