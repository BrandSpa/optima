<script id="services-added-template" type="text/x-handlebars-template">
<tr>
	<td><a href="#" class="service-edit" data-service-id="{{id}}">{{title}}</a></td>
	<td>$ {{price_1}}</td>
	<td>$ {{price_2}}</td>
	<td><a href="#" class="service-delete btn btn-xs btn-danger" data-service-id="{{id}}"><i class="icon-remove"></i></a></td>
</tr>
</script>

<script id="service-updated-template" type="text/x-handlebars-template">
	<td><a href="#" class="service-edit" data-id="{{id}}">{{title}}</a></td>
	<td>$ {{price_1}}</td>
	<td>$ {{price_2}}</td>
	<td><a href="#" class="service-delete btn btn-xs btn-danger" data-service-id="{{id}}"><i class="icon-remove"></i></a></td>
</script>