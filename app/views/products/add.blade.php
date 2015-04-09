<script id="product-add-template" type="text/x-handlebars-template">

[[ Form::open(['route' => 'products.store'], ['id' => 'products-create']) ]]

	@if(Request::segment(2))
		<input type="hidden" name="quotation_id" value="[[ Request::segment(2) ]]">
	@endif

	<div class="row">
	<div class="form-group col-lg-6">
		<select name="name" class="form-control">
			<option value="">Producto</option>
			<option value="Desktops">Desktops</option>
			<option value="Laptops">Laptops</option>
			<option value="Apple">Apple</option>
			<option value="Servers">Servers</option>
			<option value="IT Service">IT Service</option>
			<option value="IT	Service 24/7">IT	Service 24/7</option>
			<option value="Rescate Online">Rescate Online</option>
			<option value="Discos Duros Seguros">Discos Duros Seguros</option>
			<option value="Networks">Networks</option>
			<option value="Complements">Complements</option>
			<option value="Printers">Printers</option>
			<option value="Adicional">Adicional</option>
		</select>
	</div>

	<div class="form-group col-lg-6">
		<select name="type" class="form-control">
			<option value="">Tipo</option>
			<option value="WorkPro">WorkPro</option>
			<option value="WorkPlus">WorkPlus</option>
			<option value="WorkPremium">WorkPremium</option>
		</select>
	</div>

	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="processor" placeholder="Procesador" autocomplete="off">
	</div>
	<div class="form-group col-lg-6 ">
		<input type="text" class="form-control" name="ram" placeholder="RAM" autocomplete="off">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="hdd" placeholder="Disco Duro" autocomplete="off">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="burner" placeholder="Unidad optica">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="monitor" placeholder="Monitor">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="keyboard" placeholder="Teclado & Mouse">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="os" placeholder="Sistema operativo">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="office" placeholder="Office">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control" name="antivirus" placeholder="Antivirus">
	</div>
	<div class="form-group col-lg-6">
		<textarea name="additionals" rows="2" class="form-control" placeholder="Adicionales"></textarea>
	</div>

	<div class="form-group col-lg-6">
		<input type="text" class="form-control additional" class="form-control" name="lapse" placeholder="Lapso">
	</div>
	<div class="form-group col-lg-6">
		<select name="period" class="form-control">
			<option value="">Periodo</option>
			<option value="Mes">Mes</option>
			<option value="Semana">Semana</option>
			<option value="Día">Día</option>
			<option value="15 días">15 días</option>
			<option value="Hora">Hora</option>
			<option value="Servicio">Servicio</option>
			<option value="Venta">Venta</option>
		</select>
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control"  name="quantity" placeholder="Cantidad">
	</div>
	<div class="form-group col-lg-6">
		<input type="text" class="form-control"  name="price" placeholder="Precio">
	</div>
<div class="form-group col-lg-6">
	 <div class="checkbox-inline">
    <label>
      <input type="checkbox" name="show" value="1" checked> Total
    </label>
  </div>
   <div class="checkbox-inline">
    <label>
      <input type="checkbox" name="iva" value="1" checked> IVA
    </label>
  </div>
  </div>
</div>
	<div class="form-group">
		<textarea name="note" class="form-control" rows="2"  placeholder="Nota"></textarea>
	</div>
<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
	<a href="#" class="product-store btn btn-warning">Guardar</a>
	

[[ Form::close() ]]
</script>

[[ HTML::modal('product-add', 'Agregar producto') ]]


