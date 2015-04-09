<script id="product-detail-template" type="x-handlebars-template">
	<ul class="list-group">
		<li class="list-group-item"><b>Procesador:</b> {{ processor }}</li>
		<li class="list-group-item"><b>Ram:</b> {{ ram }}</li>
		<li class="list-group-item"><b>Disco Duro:</b> {{ hdd }}</li>
		<li class="list-group-item"><b>Unidad Optica:</b> {{ burner }}</li>
		<li class="list-group-item"><b>Monitor:</b> {{ monitor }}</li>
		<li class="list-group-item"><b>Teclado & Mouse:</b> {{ keyboard }}</li>
		<li class="list-group-item"><b>Sistema Operativo:</b> {{ os }}</li>
		<li class="list-group-item"><b>Office:</b> {{ office }}</li>
		<li class="list-group-item"><b>Antivirus:</b> {{ antivirus }}</li>
		<li class="list-group-item">
		<b>Adicionales:</b> 
		{{ additional_1 }}
		{{ additional_2 }}
		{{ additional_3 }}
		{{ additional_4 }}
		{{ additional_5 }}
		{{ additional_6 }}
		</li>
		<li class="list-group-item"><b>Nota:</b> {{ note }}</li>
	</ul>
</script>

[[ HTML::modal('product-detail', 'Producto') ]]
