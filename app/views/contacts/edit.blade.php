<script type="text/x-handlebars-template" id='contact-edit-template'>
	[[Form::open(['route' => 'contacts.store'], ['id' => 'create-contact'])]]
			<div class="row">
		<div class="form-group col-lg-6">
			<input type="text" name="name" class="form-control" placeholder="Nombre" value="{{name}}">
		</div>
		<div class="form-group col-lg-6">
				<input type="text" name="lastname" class="form-control" placeholder="Apellido" value="{{lastname}}">
		</div>
		<div class="form-group col-lg-6">
		<select name="gender" class="form-control">
			<option value="{{gender}}">{{gender}}</option>
			<option value="Masculino">Masculino</option>
			<option value="Femenino">Femenino</option>
		</select>
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="title" class="form-control" placeholder="Titulo" value="{{title}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="position" class="form-control" placeholder="Posición" value="{{position}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="email" class="form-control" placeholder="Email" value="{{email}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="phone_1" class="form-control" placeholder="Teléfono 1" value="{{phone_1}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="phone_2" class="form-control" placeholder="Teléfono 2" value="{{phone_2}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="mobile_1" class="form-control" placeholder="Celular 1" value="{{mobile_1}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="mobile_2" class="form-control" placeholder="Celular 2" value="{{mobile_2}}">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="fax" class="form-control" placeholder="Fax" value="{{fax}}">
		</div>
		<div class="form-group col-lg-6">
		<select name="pay_method"  class="form-control">
		{{#if pay_method}}
		<option value="{{pay_method}}">{{pay_method}}</option>
		{{else}}
		<option value="">forma de pago</option>
		{{/if}}
			<option value="anticipado">Anticipado</option>
			<option value="30">30 Días</option>
			<option value="45">45 Días</option>
			<option value="60">60 Días</option>
		</select>
		</div>

		<div class="form-group col-lg-6">
			<select  name="found_us" class="form-control">
				{{#if found_us}}
				<option value="{{found_us}}">{{found_us}}</option>
				{{else}}
				<option value="">¿Comó nos encontró?</option>
				{{/if}}
				
				@include('_sections.foundus_list')
			</select>
		</div>

		<div class="form-group col-lg-6">
		<select name="who_call" class="form-control">
		{{#if who_call}}
		<option value="{{who_call}}">{{who_call}}</option>
		{{else}}
		<option value="">¿Quién llamó?</option>
		{{/if}}
			<option value="Cliente">Cliente</option>
			<option value="Nosotros">Nosotros</option>
		</select>
		</div>
		
	</div>
	<div class="form-group">
		<textarea name="comment" class="form-control"  rows="2"  placeholder="Descripción">{{comment}}</textarea>
	</div>
		<button class="contact-update btn btn-primary btn-sm" data-contact-id="{{id}}">Guardar</button>
		<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
	</div> <!-- end row -->
	</form>
</script>
	
[[ HTML::modal('contact-edit', 'Contacto') ]]


<script type="text/x-handlebars-template" id='contact-updated-template'>
	<td><a href="#" data-contact-id="{{id}}" class="contact-edit">{{name}} {{lastname}}</a></td>
	<td>{{email}}</td>
	<td>{{mobile_1}}</td>
	<td>{{phone_1}}</td>
</script>


