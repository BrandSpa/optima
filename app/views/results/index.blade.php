@section('content')

	<div class="col-lg-12">

		<div class="panel panel-default" id="reports-filters">
		<div class="panel-body">

			<div class="btn-group" data-toggle="buttons">
				<label class="btn btn-primary type active">
				<input type="radio" name="type" autocomplete="off" value="%"> Todo
				</label>
				<label class="btn btn-primary type">
					<input type="radio" name="type" autocomplete="off" value="Alquiler"> Alquiler
				</label>
				<label class="btn btn-primary type">
					<input type="radio" name="type" autocomplete="off" value="Servicio"> Servicio
				</label>
			</div>

			<div class="col-lg-2">
				<input type="text" class="datepicker_start form-control" placeholder="Desde">
			</div>

			<div class="col-lg-2">
				<input type="text" class="datepicker_end form-control" placeholder="Hasta">
			</div>

				<div class="col-lg-3">
					<select name="byClient" class="by-client form-control">
						<option value="">Seleccionar Tipo Cliente</option>
						<option value="Activo">Activo</option>
						<option value="Inactivo">Inactivo</option>
						<option value="Nuevo">Nuevo</option>
					</select>
			</div>

			<div class="col-lg-2">
				<select name="" class="form-control by-status">
					<option value="">Selecionar status</option>
					<option value="Borrador">Borrador</option>
					<option value="Enviada">Enviada</option>
					<option value="Seguimiento">Seguimiento</option>
					<option value="No enviada">No enviada</option>
					<option value="Efectiva">Efectiva</option>
					<option value="No efectiva">No efectiva</option>
					<option value="Replanteada">Replanteada</option>
				</select>
			</div>
		</div>
		</div>

		<div class="row" id="total"> </div>

		<div class="row">

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones en pesos por: Etiqueta</h5>
					</div>
					<div class="panel-body">
						<div id="byStatus"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cantidad de cotizaciones por: Etiqueta</h5>
					</div>
					<div class="panel-body">
						<div id="byStatusCount"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones en pesos por: ¿Como nos encontro?</h5>
					</div>
					<div class="panel-body">
						<div id="byFindUs"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default" id="byFindUsCount">
					<div class="panel-heading">
						<h5>Cantidad de cotizaciones por: ¿Como nos encontro?</h5>

					</div>
					<div class="panel-body">

					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones por: Asesor</h5>
					</div>
					<div class="panel-body">
						<div id="byAdvisors"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones por: Tipo de cliente</h5>
					</div>
					<div class="panel-body">
						<div id="byClientType"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones en pesos por: No efectivas</h5>
					</div>
					<div class="panel-body">
						<div id="byNoEffective"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cantidad de cotizaciones por: No efectivas</h5>
					</div>
					<div class="panel-body">
						<div id="byNoEffectiveCount"></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5>Cotizaciones por: tiempo de enviada</h5>
					</div>
					<div class="panel-body">
						<div id="byDiffSent"></div>
					</div>
				</div>
			</div>
</div>
	</div>
@stop