<link rel="stylesheet" href="[[ public_path().'/css/pdf/pdf.css' ]]">

@section('custom_css')

@show
<div class="footer">Código: FO-COM-02 Fecha: 25-mar-2014 Versión 6</div>
<div id="header">
	@section('header')
	@show
	<span>[[ $quotation->id ]]</span>
</div>

<div id="content">
	<div id="contact">
		<p class="date">Bogotá D.C. [[ date_format($quotation->created_at, 'd/m/Y')  ]]</p>
		<p></p>
		<p>[[ $quotation->company->name ]]</p>
		<p>@if( $quotation->contact->title )[[ $quotation->contact->title ]], @endif [[ $quotation->contact->name ]] [[ $quotation->contact->lastname ]]</p>
		<p>[[ $quotation->contact->position ]]</p>
		<p>[[ $quotation->company->address ]]</p>
		<p>[[ $quotation->contact->mobile_1 ]]</p>
		<p>[[ $quotation->contact->phone_1 ]]</p>
		<p>[[ $quotation->contact->phone_2 ]]</p>
	</div>
	<div id="intro">
		<p>
			En Avante trabajamos para que usted y su compañía tengan a mano herramientas tecnológicas siempre actualizadas.
			Nuestro modelo de Renting le permite contar con equipos de última tecnología a su medida,
			en las principales marcas del mundo, por los periodos que su compañía los necesite,
			ofreciéndole grandes ventajas tributarias y valores agregados fundamentales como nuestro Servicio Técnico 24/7®,
			Discos Duros Seguros®, Rescate Online® entre otros, <br>(adjunto encontrará nuestro portafolio de soluciones).
		</p>

		<p>
			Atendiendo a su solicitud nos complace enviar la cotización de los productos y servicios solicitados,
			estamos dispuestos a atender cualquier inquietud y por supuesto a presentarle todo nuestro portafolio,
			en el que de seguro encontrará nuevas herramientas para su empresa.
		</p>
	</div>
</div>
<br>
<br>

@yield('content')


