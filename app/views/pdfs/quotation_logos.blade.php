@extends('layouts.pdf')
@section('custom_css')
	@parent
	<style>
		body{
		border: none;
	}

	#header img{
	height: 220px;
}

	#header span, #header p{
		color:#000;
	}

	#header p {
		top: 126pt;
	}

	#header span{
		display: block;
		position: absolute;
		right: 0px;
		top: 136pt;
		font-size: 18pt;
	}

	#intro{
		margin-bottom: 80px;
	}

	</style>
@stop
@section('header')
	@parent
	<img src="[[ public_path().'/img/pdf/empty.jpg' ]]" alt="">
@stop

@section('content')
	@include('_sections.products_pdf')
	@include('_sections.services_pdf')

	@if($quotation->comment)
	<br>
	<table cellspacing="0"  >

	<tr>
		<td class="no-border"><span class="title">Observaciónes</span></td>
	</tr>
	<tr>
		<td class="no-border">
		[[ $quotation->comment ]]
		</td>
	</tr>

	</table>
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
			de Infraestructura Y Tecnología a los correos  tecnico@avante.cc y/o ctecnico@avante.net.co
		</p>
	</div>
	<img src="[[ public_path().'/img/pdf/firmas/'.$quotation->user->name.'-'.$quotation->user->lastname.'.png' ]]" id="firm" alt="">
	<span class="firm">[[ $quotation->user->name ]] [[ $quotation->user->lastname ]]</span>
@stop