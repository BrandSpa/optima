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

<canvas id="myChart" width="400" height="400"></canvas>
<script>

	Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
        return fn.apply(thisp, arguments);
    };
};
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script>
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>
	