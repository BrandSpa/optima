@extends('layouts.pdf')

@section('header')
	@parent

	@if($quotation->contact->gender != 'Femenino')
		<img src="[[ public_path().'/img/pdf/header-women.jpg' ]]">
	@else
		<img src="[[ public_path().'/img/pdf/header-men.jpg' ]]">
	@endif

@stop

@section('content')
	@include('_sections.products_pdf')
	@include('_sections.services_pdf')

	@if($quotation->comment)
		<br>
		<div class="divider"></div>
		<span class="comment-title">Observaciónes</span>
		<div class="divider"></div>
		<div class="comment-content">
			[[ $quotation->comment ]]
		</div>

	@endif

	<img src="[[ public_path().'/img/pdf/includes.png' ]]" alt="" id="banner_includes">

	@if($quotation->offer)
		@if($quotation->offer == "IT	Service 24/7")
			<img src="[[ public_path().'/img/pdf/banners/IT Service 247.png' ]]" alt="" id="banner">
		@else
			<img src="[[ public_path().'/img/pdf/banners/'.$quotation->offer.'.png' ]]" alt="" id="banner">
		@endif
	@endif

	<div class="message">
		<p>
			Para hacer los mantenimientos preventivos el cliente debe enviar solicitud a nuestro departamento
			de Infraestructura Y Tecnología a los correos  tecnico@rentadvisor.com.co y/o ctecnico@rentadvisor.com.co
		</p>
		<p>
			La seguridad y buen cuidado de los equipos en alquiler, están bajo la responsabilidad del cliente durante el 
			tiempo que permanezcan en sus instalaciones. En caso de pérdida o robo el cliente deberá reponer el equipo con 
			uno que tenga las mismas características técnicas del extraviado, presentando factura y manifiesto de aduana o 
			cancelará a RentAdvisor el costo del mismo según el valor comercial que se cotice en el mercado y el valor del 
			arrendamiento durante el tiempo que demore en pagar el valor comercial del mismo, previa presentación de la factura 
			por parte de RentAdvisor.
		</p>
	</div>

	@if(file_exists( public_path().'/img/pdf/firmas/'.$quotation->user->name.'-'.$quotation->user->lastname.'.png'))
		<img src="[[ public_path().'/img/pdf/firmas/'.$quotation->user->name.'-'.$quotation->user->lastname.'.png' ]]" id="firm" alt="">
	@else
		<br /><br/ >
	@endif
	<span class="firm">[[ $quotation->user->name ]] [[ $quotation->user->lastname ]]</span>
	<span class="firm">@if($quotation->user->id == 3) Coordinador Comercial @elseif($quotation->user->id == 12) Director Comercial @else Asesor Comercial @endif</span>
	<span class="firm">[[ $quotation->user->email ]]</span>
	<span class="firm">PBX 6 36 10 51</span>

	<img src="[[ public_path().'/img/pdf/final.jpg' ]]" alt="" id="final">
@stop

