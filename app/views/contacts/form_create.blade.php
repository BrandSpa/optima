	[[Form::open(['route' => 'contacts.store'], ['id' => 'create-contact'])]]
	<div class="row">
	<input type="hidden" name="company_id" value="[[ Session::get('company_id') ]]">
		<div class="form-group col-lg-6">
			<input type="text" name="name" class="form-control" placeholder="Nombre">
		</div>
		<div class="form-group col-lg-6">
				<input type="text" name="lastname" class="form-control" placeholder="Apellido">
		</div>
		<div class="form-group col-lg-6">
		<select name="gender" class="form-control">
			<option value="Masculino">Masculino</option>
			<option value="Femenino">Femenino</option>
		</select>
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="title" class="form-control" placeholder="Titulo">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="position" class="form-control" placeholder="Posición">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="email" class="form-control" placeholder="Email">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="phone_1" class="form-control" placeholder="Teléfono 1">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="phone_2" class="form-control" placeholder="Teléfono 2">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="mobile_1" class="form-control" placeholder="Celular 1">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="mobile_2" class="form-control" placeholder="Celular 2">
		</div>
		<div class="form-group col-lg-6">
		<input type="text" name="fax" class="form-control" placeholder="Fax">
		</div>
		<div class="form-group col-lg-6">
		<select name="pay_method"  class="form-control">
			<option value="">forma de pago</option>
			<option value="anticipado">Anticipado</option>
			<option value="30">30 Días</option>
			<option value="45">45 Días</option>
			<option value="60">60 Días</option>
		</select>
		</div>
		<div class="form-group col-lg-6">
			<select  name="found_us" class="form-control">
				<option value="">¿Comó nos encontró?</option>
				@include('_sections.foundus_list')
			</select>
		</div>

		<div class="form-group col-lg-6">
		<select name="who_call" class="form-control">
			<option value="">Quién llamó?</option>
			<option value="cliente">Cliente</option>
			<option value="nosotros">Nosotros</option>
		</select>
		</div>
	
	</div>
	<div class="form-group">
		<textarea name="comment" class="form-control"  rows="2"  placeholder="Descripción"></textarea>
		</div>
	<button class="contact-store btn btn-warning pull-right">Siguiente</button>
	
	[[ Form::close() ]]