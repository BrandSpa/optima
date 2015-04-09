@section('content')
<div class="row col-lg-12">
	<div class="col-lg-12">
		<div class="panel panel-default" id="companies">
			<div class="panel-heading">
				<div class="row">
					<div class="col-md-3 col-sm-4 col-xs-6">
						<form action="#" class="company-search" method="POST">
							<input type="text" name="query" class="form-control company-query" placeholder="Buscar Empresa">
						</form>
					</div>
					<a href="#" class="company-see-more btn btn-default btn-sm" data-offset="0">Ver más</a>
					<a href="#" class="company-open-create btn btn-primary btn-sm">Nueva empresa</a>
				</div>
			</div>

		<div class="panel-body">
		<div class="table-responsive">
			<table class="table table-condensed">
				<thead>
						<tr class="thead">
					<th>Empresa</th>
					<th></th>
					<th>NIT</th>
					<th>Dirección</th>
					<th>Teléfono</th>
					<th>Sector</th>
					<th></th>
				</tr>
				</thead>
			
			</table>
			</div>
		</div>
	</div>
	</div>
</div> <!-- end row -->

<div class="modal fade" id="company-edit-modal">
  <div class="modal-dialog">
    <div class="modal-content"> </div> 
  </div>
</div>

<div class="modal fade" id="company-contacts-modal">
  <div class="modal-dialog">
    <div class="modal-content"> </div>
  </div>
</div>

<div class="modal fade" id="company-create-modal">
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