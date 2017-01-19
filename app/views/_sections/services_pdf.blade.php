@foreach($quotation->services as $service)
<div class="divider"></div>
	<div class="service-title"><img src="[[public_path().'/img/pdf/products/IT Service.png']]" class="service-img"><span>[[ $service->title ]]</span></div>	
	<div class="divider"></div>
	<div class="service-content">
		[[ str_replace(array('precio1', 'precio2'), array("$ ".$service->price_1, "$ ".$service->price_2), $service->text) ]]
	</div>
@endforeach
