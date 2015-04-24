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
				<br>
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
			<div class="panel-heading">
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

<div class="modal fade" id="quotation-company-contacts-modal">
  <div class="modal-dialog">
    <div class="modal-content">
     <div class="modal-body">
      <div class="select"></div>
    </div>
    <div class="modal-footer">
      <a href="#" class="quotation-contact-change btn btn-primary btn-sm">Guardar</a>
      <a href="#" class="btn btn-default btn-sm modal-close" >Cancelar</a>
    </div>
  </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" id="quotation-comment-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="quotation-mail-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" id="quotation-no-effective-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="quotation-no-send-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!-- modals containers -->
<div class="modal fade" id="contact-edit-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<div class="modal fade" id="quotation-service-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<div class="modal fade" id="quotation-comment-modal">
  <div class="modal-dialog">
    <div class="modal-content"> </div>
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="product-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"> </div>
  </div>
</div>

<div class="modal fade" id="tracking-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<div class="modal fade" id="quotation-company-contacts-modal">
  <div class="modal-dialog">
    <div class="modal-content">
     <div class="modal-body">
      <div class="select"></div>
    </div>
    <div class="modal-footer">
      <a href="#" class="quotation-contact-change btn btn-primary btn-sm">Guardar</a>
      <a href="#" class="btn btn-default btn-sm modal-close" >Cancelar</a>
    </div>
  </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" id="service-edit-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<div class="modal fade" id="contact-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>


@stop
