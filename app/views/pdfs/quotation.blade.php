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
	</div>

	<img src="[[ public_path().'/img/pdf/firmas/'.$quotation->user->name.'-'.$quotation->user->lastname.'.png' ]]" id="firm" alt="">
	<span class="firm">[[ $quotation->user->name ]] [[ $quotation->user->lastname ]]</span>
	<span class="firm">@if($quotation->user->id == 3) Coordinador Comercial @else Asesor Comercial @endif</span>
	<span class="firm">comercial@rentadvisor.com.co</span>
	<span class="firm">PBX 6 36 10 51</span>

	<img src="[[ public_path().'/img/pdf/final.jpg' ]]" alt="" id="final">
@stop

<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script>

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});

</script>