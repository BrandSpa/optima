@section('content')

@if(isset($company))
<div class="row">
	<div class="col-md-7">
		<div class="panel panel-default">	
			<div class="panel-body">
				<div class="progress">
					<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%">

					</div>
				</div>
				@include('contacts.form_create')
			</div>
		</div>
	</div><!-- end col-md -->

	<div class="col-md-5">
		<div class="panel panel-default">
			<div class="panel-body">
			<h4>
				Contactos [[ $company->name ]]
			</h4>
				<div class="table-responsive">
				<table class="table table-striped table-condensed contact-detail">
					<tr>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
					@if(isset($company))
					@foreach( $company->contacts as $contact )
					<tr>
						<td><a href="#" class="contact-edit" data-contact-id="[[ $contact->id ]]">[[ $contact->name ]] [[ $contact->lastname ]]</a></td>
						<td><a href="mailto:[[ $contact->email ]]">[[ $contact->email ]]</a></td>
					</tr>
					@endforeach
					@endif
				</table>
				</div>
			</div>

		</div>
	</div> <!-- end col-md -->

</div>
@else
	<span class="alert alert-warning"><a href="/companies/create">Seleccione empresa</a></span>
@endif

<!-- includes -->
@include('contacts.edit')
@stop