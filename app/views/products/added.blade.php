<script id="products-added-template" type="x-handlebars-template">
	<tr>
	<td><a href="#" class="product-edit" data-product-id="{{id}}">{{ name }}</a></td>
	<td>
		{{#fifteen period}}
		{{else}}
			{{ lapse }}
		{{/fifteen}}

		{{#plural lapse}}
			{{period}}
		{{else}}
			{{#pluralMonth period}}
				Meses
			{{else}}
				{{#fifteen period}}
					15 días
				{{else}}
					{{ period }}s
				{{/fifteen}}
			{{/pluralMonth}}
		{{/plural}}
	</td>
	<td>{{ quantity }}</td>
	<td>$ {{ price }}</td>
	<td>$ {{ total }}</td>
	<td><a href="#" class="product-delete btn btn-xs btn-danger" data-product-id="{{id}}"><i class="icon-remove"></i></a></td>
	</tr>
</script>

<script id="products-updated-template" type="x-handlebars-template">
	<td> <a href="#" class="product-edit" data-product-id="{{id}}">{{ name }}</a> </td>
	<td>
		{{#fifteen period}}
		{{else}}
			{{ lapse }}
		{{/fifteen}}

		{{#plural lapse}}
			{{period}}
		{{else}}
			{{#pluralMonth period}}
				Meses
			{{else}}
				{{#fifteen period}}
					15 días
				{{else}}
					{{ period }}s
				{{/fifteen}}
			{{/pluralMonth}}
		{{/plural}}
	</td>

	<td>{{ quantity }}</td>
	<td>$ {{ price }}</td>
	<td>$ {{ total }}</td>
	<td><a href="#" class="product-delete btn btn-xs btn-danger" data-product-id="{{service_id}}"><i class="icon-remove"></i></a></td>
</script>


