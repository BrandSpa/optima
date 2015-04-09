@section('content')
<div id="quotation">
	<div class="col-lg-9">

		<div class="panel panel-default" id="quotation-options">
			<div class="panel-heading"> </div>
			<div class="panel-body"> </div>
		</div>		

		<div class="panel panel-default" id="quotation-products">
			<div class="panel-heading btn-hidden">
				<a href="#" class="quotation-product-open-create btn btn-primary btn-xs">Agregar producto</a>
			</div>

			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-condensed products-added">
						<thead>
							<tr class="thead">
								<th>Producto</th>
								<th></th>
								<th>Tiempo</th>
								<th>Cantidad</th>
								<th>Precio</th>
								<th>Total</th>
								<th></th>
							</tr>
							<tbody class="sortable">

							</tbody>
						</thead>
					</table>
				</div>
			</div>
		</div>
		


		<div class="panel panel-default" id="quotation-services">
			<div class="panel-heading btn-hidden">
				<div id="quotation-service-list">

				</div>
				&nbsp;
				<a href="#" class="btn btn-primary btn-xs quotation-service-attach btn-hidden">Agregar</a>
				<a href="#" class="quotation-product-open-create btn btn-default btn-xs btn-hidden">Buscar servicio</a>
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-condensed services-added">
						<thead>
							<tr>
								<th>Servicio</th>
								<th></th>
								<th>precio 1</th>
								<th>precio 2</th>
								<th></th>
							</tr>
						</thead>
					</table>
				</div>
				@include('quotations/partials/_services')
			</div>
		</div>


		<div  id="trackings">

			<div class="panel panel-default tracking-options">
				<div class="panel-body">
					<a href="#" class="btn btn-primary btn-xs tracking-open-create">Agregar Registro</a>
					<div class="pull-right">
						<a href="#" class="btn btn-success btn-xs effective">Efectiva</a>
						<a href="#" class="btn btn-danger btn-xs no-effective">No Efectiva</a>
					</div>
				</div>
			</div>
			<div class="trackings-container">
				<div class="last-tracking"></div>
			</div>
			
		</div>

	</div>

	<div class="col-lg-3" style="padding-left: 7px">

		<div class="panel panel-default" id="quotation-contact">
			<div class="panel-heading btn-hidden">
				<a href="#" class="quotation-contact-change btn btn-primary btn-xs ">Cambiar contacto</a>
				<a href="#" class="btn btn-primary btn-xs quotation-contact-create">Agregar Contacto</a>
			</div>
			<div class="panel-body">
				<div class="table-responsive"> </div>
			</div>
		</div>

		<div class="panel panel-default" id="quotation-times">
			<div class="panel-heading">
				<h5>Tiempos</h5>
			</div>
			<div class="panel-body">
				<div class="table-responsive"></div>
			</div>
		</div>

		<div class="panel panel-default" id="quotation-activities">
			<div class="panel-heading">
				<h5>Actividad</h5>
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-striped table-condensed"></table>
				</div>
				
			</div>
		</div>
	</div>
</div>

<!-- includes -->
@include('contacts/partials/_edit')
@include('services/partials/_attach')
@include('services/partials/_service_result')
@include('quotations/partials/_comment')
@include('quotations/partials/_no_effective')
@include('quotations/partials/_no_send')
@include('quotations/partials/_mail')
@include('products/partials/_edit')
@include('quotations/partials/_times')
@include('quotations/partials/_tracking')
@include('trackings/partials/_create')
@include('quotations/partials/_company_contacts')
@include('services/partials/_edit')
@include('todos/partials/_create')
@include('contacts/partials/_create')

@stop
