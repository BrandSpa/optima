@section('content')
<div class="row">
	<div class="col-md-7">
		<div class="panel panel-default">	
			<div class="panel-body">
				<div class="progress">
					<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
					</div>
				</div>
				@include('companies.create_form')
			</div>
		</div> <!-- end panel -->
	</div><!-- end col-md -->

	<div class="col-md-5">
		<div class="panel panel-default">
			<div class="panel-body">
				<input type="text" class="form-control companies-search" placeholder="Buscar Empresa">
				<p></p>
				<div class="companies-result">
					
				</div>
			</div>
		</div> <!-- end panel -->
	</div> <!-- end col-md -->
</div> <!-- end row -->

@stop