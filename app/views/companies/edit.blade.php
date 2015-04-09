<script type="text/x-handlebars-template" id='company-edit-template'>
	<form method="POST" action="#" class="company-edit-form">
	<div class="row">
		<div class="form-group col-lg-6">
			<input type="text" name="name" class="form-control" placeholder="Nombre" value="{{name}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" name="nit" class="form-control" placeholder="NIT" value="{{nit}}">
		</div>
		<div class="form-group col-lg-6">
			<select name="sector" class="form-control">
			{{#if sector}}
			<option value="{{sector}}">{{sector}}</option>
			{{else}}
				<option value="">Sector</option>
			{{/if}}
				
				@include('_sections.sectors_list')
			</select>
		</div>
		<div class="form-group col-lg-6">
			<select name="city" class="form-control">
			{{#if city}}
				<option value="{{city}}">{{city}}</option>
			{{else}}
				<option value="">Ciudad</option>
			{{/if}}
				<option value="">Ciudad</option>
				@include('_sections.citys_list')
			</select>
		</div> 
		<div class="form-group col-lg-12">
			<input type="text" name="address" class="form-control" placeholder="Dirección" value="{{address}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" name="phone" class="form-control" placeholder="Teléfono" value="{{phone}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" name="web" class="form-control" placeholder="Web" value="{{web}}">
		</div>
		<div class="form-group col-lg-12">
			<textarea name="comment" class="form-control"  rows="2" class="span6" placeholder="Comentario">{{comment}}</textarea>
		</div>
		</div>
		<a href="#" class="company-update btn btn-primary btn-sm" data-company-id="{{id}}">Guardar</a>
		<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
		
	</form>
</script>

<div class="modal fade" id="company-detail">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body"> </div>
		</div>
	</div>
</div>

<script type="text/x-handlebars-template" id="company-updated-template">
	<td><a href="#" data-company-id="{{id}}" class="company-edit">{{name}}</a></td>
	<td>{{nit}}</td>
	<td>{{address}}</td>
	<td>{{phone}}</td>
</script>

<script type="text/x-handlebars-template" id="company-only-name-template">
	<a href="#" data-company-id="{{id}}" class="company-edit">{{name}}</a>
</script>