@extends('layouts.pdf')

@section('header')
	@parent

	@if($solicitudes->contact->gender != 'Femenino')
		<img src="[[ public_path().'/img/pdf/header-women.jpg' ]]">
	@else
		<img src="[[ public_path().'/img/pdf/header-men.jpg' ]]">
	@endif

@stop

@section('content')
	@include('_sections.products_solicitudes_pdf')
	@include('_sections.services_pdf_solicitudes')

	@if($solicitudes->comment)
		<br>
		<div class="divider"></div>
		<span class="comment-title">Observaciónes</span>
		<div class="divider"></div>
		<div class="comment-content">
			[[ $solicitudes->comment ]]
		</div>

	@endif

	<img src="[[ public_path().'/img/pdf/includes.png' ]]" alt="" id="banner_includes">

	@if($solicitudes->offer)
		@if($solicitudes->offer == "IT	Service 24/7")
			<img src="[[ public_path().'/img/pdf/banners/IT Service 247.png' ]]" alt="" id="banner">
		@else
			<img src="[[ public_path().'/img/pdf/banners/'.$solicitudes->offer.'.png' ]]" alt="" id="banner">
		@endif
	@endif

	<div class="">
	<p>
			Para hacer los mantenimientos preventivos el cliente debe enviar solicitud a nuestro departamento 
			de Infraestructura Y Tecnología a los correos  tecnico@rentadvisor.com.co y/o ctecnico@rentadvisor.com.co.
		</p>
		<p>
			La seguridad y buen cuidado de los equipos en alquiler, están bajo la responsabilidad del cliente durante el 
			tiempo que permanezcan en sus instalaciones. En caso de pérdida o robo el cliente deberá reponer el equipo con 
			uno que tenga las mismas características técnicas del extraviado, presentando factura y manifiesto de aduana o 
			cancelará a RentAdvisor el costo del mismo según el valor comercial que se cotice en el mercado y el valor del 
			arrendamiento durante el tiempo que demore en pagar el valor comercial del mismo, previa presentación de la factura 
			por parte de RentAdvisor.
		</p>
		<p>Por favor tener en cuenta los términos del servicio consignados en el siguiente link: <a style="text-decoration:none"  href="http://rentadvisor.com.co/wp-content/uploads/guia.pdf">Guía del servicio.</a></p>
	</div>

	@if(file_exists( public_path().'/img/pdf/firmas/'.$solicitudes->user->name.'-'.$solicitudes->user->lastname.'.png'))
		<img src="[[ public_path().'/img/pdf/firmas/'.$solicitudes->user->name.'-'.$solicitudes->user->lastname.'.png' ]]" id="firm" alt="">
	@else
		<br /><br>
	@endif
	<span class="firm">[[ $solicitudes->user->name ]] [[ $solicitudes->user->lastname ]]</span>
	<span class="firm">@if($solicitudes->user->id == 3) Ejecutivo de cuenta @elseif($solicitudes->user->id == 12) Director Comercial @elseif($solicitudes->user->id == 17) Hunter @else Asesor Comercial @endif</span>
	<span class="firm">[[ $solicitudes->user->email ]]</span>
	<span class="firm">PBX 6 36 10 51</span>

	<img src="[[ public_path().'/img/pdf/final.jpg' ]]" alt="" id="final">
@stop

