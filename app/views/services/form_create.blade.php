[[ Form::open(['route' => 'services.store', 'id' => 'service-form'] ) ]]
	<div class="form-group">
		<select class="form-control" name="title" id="">
			<option value="">Seleccionar Servicio</option>
		</select>
	</div>
	<div class="row">
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="price_1" placeholder="Precio 1"> 
		</div>

		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="price_2" placeholder="Precio 2"> 
		</div>
	</div>
	<a href="#" class="btn btn-primary service-update-prices">Actualizar precios</a>
	<a href="#" class="btn btn-warning pull-right service-store">Agregar</a>
[[ Form::close() ]]

<script type="text/x-handlebars-template"></script>