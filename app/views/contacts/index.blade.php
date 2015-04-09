@section('content')
<div class="row col-lg-12">
	<div class="col-lg-12">
		<div class="panel panel-default" id="contacts">
			<div class="panel-body">
			<div class="row">
				<div class="col-md-3 col-sm-4 col-xs-6">
				<form action="#" class="contact-search" method="POST">
					<input type="text" name="query" class="form-control contact-query" placeholder="Buscar Contacto">
				</form>
			</div>

		<a href="#" class="contact-see-more btn btn-default btn-sm" data-offset="0">Ver más</a>
		</div>
		<hr>
		<div class="table-responsive">
				<table class="table table-striped table-condensed contacts-list">
					<tr class="thead">
						<th>Contacto</th>
						<th>Email</th>
						<th>Celulares</th>
						<th>Teléfonos</th>
						<th>Empresa</th>
					</tr>
				</table>

			</div>

		</div>
	</div>
</div> <!-- end row -->

<div class="modal fade" id="contact-edit-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>



@stop