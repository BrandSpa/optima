@section('content')
<div class="row">

	<div class="col-lg-7">
		<div class="panel panel-default">		
			<div class="panel-body">
				<div class="progress">
					<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
					</div>
				</div>
				@include('products.form_create')
			</div>
		</div>
	</div><!-- end col -->

	<div class="col-lg-5">
		<div class="panel panel-default">
			<div class="panel-heading">
				<p class="panel-title">Productos ingresados</p>
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-condensed table-striped products-added">
						<tr>
							<th>Producto</th>
							<th>Lapso</th>
							<th>Cantidad</th>
							<th>precio</th>
							<th>Total</th>
							<th></th>
						</tr>

						@if(isset($products))
						@foreach($products as $product)
						<tr>
							<td> 
								<a href="#" class="product-edit" data-product-id="[[ $product->id ]]">[[ $product->name ]]</a>
							</td>
							<td>[[ $product->lapse ]] [[ $product->period ]]</td>
							<td>[[ $product->quantity ]]</td>
							<td>[[ $product->price ]]</td>
							<td>[[ $product->total ]]</td>
							<td><a href="#" class="product-delete btn btn-xs btn-danger" data-product-id="[[ $product->id ]]"><i class="icon-remove"></i></a></td>
						</tr>
						@endforeach
						@endif
					</table>
				</div>
			</div>
		</div>
	</div> <!-- end col -->

	<div class="col-lg-5">
		<div class="panel panel-default">
			<div class="panel-heading">
				<p class="panel-title">Servicios ingresados</p>
			</div>
			<div class="panel-body">
				<div class="table-responsive">
				<table class="table table-condensed table-striped services-added">
					<tr>
						<th>Titulo</th>
						<th>Precio 1</th>
						<th>Precio 2</th>
						<th></th>
					</tr>
					@if(isset($services))
						@foreach($services as $service)
							<tr>
								<td><a href="#" class="service-edit" data-service-id="[[ $service->id ]]">[[ $service->title ]]</a></td>
								<td>[[ $service->price_1 ]]</td>
								<td>[[ $service->price_2 ]]</td>
								<td><a href="#" class="service-delete btn btn-xs btn-danger" data-service-id="[[ $service->id ]]"><i class="icon-remove"></i></a></td>
							</tr>
						@endforeach
					@endif
				</table>
				</div> <!-- end table-responsive -->
			</div> 
			<div class="panel-footer">
				<a href="#" class="service-add btn btn-warning">Agregar servicio</a>
				<a href="/services" class="btn btn-default">Lista servicios</a>
			</div>
		</div> <!-- end panel -->
	</div> <!-- end col -->

</div>

<!-- includes -->
@include('products.added')
@include('products.edit')
@include('services.add')
@include('services.show')
@include('services.edit')

@stop