@section('content')
<div class="col-lg-9">
	<div class="panel panel-default" id="quotations">
		<div class="panel-heading quotations-filters">
			<a href="#" class="quotation-open-quote btn btn-primary btn-sm">Nueva Cotización</a>
		</div>

		<div class="panel-body">
			<div class="row quotations-filters">
				<div class="col-lg-12">
					<form action="#" class="quotation-search" method="POST">
						<div class="form-group">
							<input type="text" name="query" class="form-control quotation-query" placeholder="Buscar Cotización">
						</div>
					</form>
				</div>

				<div class="col-lg-4" >
					<select name="" class="form-control filter-status">
						<option value="">Selecionar Estado</option>
						<option value="Borrador">Borrador</option>
						<option value="Enviada">Enviada</option>
						<option value="Seguimiento">Seguimiento</option>
						<option value="No enviada">No enviada</option>
						<option value="Efectiva">Efectiva</option>
						<option value="No efectiva">No efectiva</option>
						<option value="Replanteada">Replanteada</option>	
					</select>
				</div>
				<div class="col-lg-4">
					<select name="" class="form-control filter-advisor">
						<option value="">Selecionar Asesor</option>
						<option value="Andrés Rojas">Andrés Rojas</option>
						<option value="Diego Peña">Diego Peña</option>
						<option value="Otros">Otros</option>
					</select>
				</div>
				<div class="col-lg-4">
					<select name="" class="form-control filter-client-type">
						<option value="*">Selecionar tipo de cliente</option>
						<option value="Activo">Activo</option>
						<option value="Inactivo">Inactivo</option>
						<option value="Nuevo">Nuevo</option>
					</select>
				</div>

			</div>
			<hr>
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr class="thead">
							<th>#</th>
							<th></th>
							<th>Estado</th>
							<th>Asesor</th>
							<th>Empresa</th>
							<th>Contacto</th>
							<th>Creada</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>	
			<div class="panel-footer quotations-filters">
				<a href="#" class="btn btn-default quotation-see-more btn-sm" style="width: 100%">Cargar más</a>
			</div>

		</div>

	</div> <!-- end col -->


	<div class="panel panel-default" id="todos">
		<div class="panel-heading">
			<a href="#" class="btn btn-primary btn-sm todo-open-create">Crear tarea</a>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th>Completada</th>
							<th>Título</th>
							<th>Descripción</th>
							<th>Creada</th>
							<th>Vencimiento</th>
							<th>Asignada por</th>
							<th>Para</th>
							<th>Cotización</th>
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>
			</div>
		</div>
	</div>
</div> <!-- end row -->

<div class="col-lg-3" style="padding-left: 7px">
	<div class="panel panel-default" id="activities">
		<div class="panel-heading">
			<h5>Actividad Reciente</h5>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-condensed"></table>
			</div>
		</div>
	</div>
</div> <!-- end col -->

<!-- includes -->
@include('quotations/partials/_quotation')
@include('quotations/partials/_activity')
@include('quotations/partials/_quotations_results')
@include('todos/partials/_todo')
@include('todos/partials/_create')
@include('todos/partials/_edit')

@stop