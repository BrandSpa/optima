<script id="product-edit-template" type="x-handlebars-template">
	[[ Form::open(['route' => 'products.store'], ['id' => 'products-create']) ]]

	<input type="hidden" name="quotation_id" value="[[ Session::get('quotation_id') ]]">
	<div class="row">
	<div class="form-group col-lg-3">
		<select name="name" class="form-control select-product-name">
		{{#if name}}
			<option value="{{name}}">{{name}}</option>
		{{else}}
			<option value="">Producto</option>
		{{/if}}
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

	<div class="form-group col-lg-3">
		<select name="type" class="form-control">
		{{#if type}}
			<option value="{{type}}">{{type}}</option>
		{{else}}
			<option value="">Tipo</option>
		{{/if}}

			<option value="WorkPro">WorkPro</option>
			<option value="WorkPlus">WorkPlus</option>
			<option value="WorkPremium">WorkPremium</option>
		</select>
	</div>

	<div class="config">
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="processor" placeholder="Procesador" value="{{processor}}">
		</div>
		<div class="form-group col-lg-6 ">
			<input type="text" class="form-control" name="ram" placeholder="RAM" value="{{ram}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="hdd" placeholder="Disco Duro" value="{{hdd}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="burner" placeholder="Unidad optica" value="{{burner}}">
		</div>
			<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="network_card" placeholder="Tarjeta red" value="{{network_card}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="battery" placeholder="Batería" value="{{battery}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="monitor" placeholder="Monitor" value="{{monitor}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="keyboard" placeholder="Teclado & Mouse" value="{{keyboard}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="os" placeholder="Sistema operativo" value="{{os}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="office" placeholder="Office" value="{{office}}">
		</div>
		<div class="form-group col-lg-6">
			<input type="text" class="form-control" name="antivirus" placeholder="Antivirus" value="{{antivirus}}">
		</div>
	</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_1" class="additional form-control" placeholder="Adicional" value="{{ additional_1}}">
</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_2" class="additional form-control" placeholder="Adicional" value="{{ additional_2 }}">
</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_3" class="additional form-control" placeholder="Adicional" value="{{ additional_3 }}">
</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_4" class="additional form-control" placeholder="Adicional" value="{{ additional_4 }}">
</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_5" class="additional form-control" placeholder="Adicional" value="{{ additional_5 }}">
</div>
<div class="form-group col-lg-6">
	<input type="text" name="additional_6" class="additional form-control" placeholder="Adicional" value="{{ additional_6 }}">
</div>

	<div class="form-group col-lg-3">
		<input type="text" class="form-control additional" class="form-control" name="lapse" placeholder="Lapso" value="{{lapse}}">
	</div>
	<div class="form-group col-lg-3">
		<select name="period" class="form-control">
		{{#if period}}
			<option value="{{period}}">{{period}}</option>
		{{else}}
			<option value="">Periodo</option>
		{{/if}}

			<option value="Mes">Mes</option>
			<option value="Semana">Semana</option>
			<option value="Día">Día</option>
			<option value="15 días">15 días</option>
			<option value="Hora">Hora</option>
			<option value="Servicio">Servicio</option>
			<option value="Venta">Venta</option>
		</select>
	</div>
	<div class="form-group col-lg-3">
		<input type="text" class="form-control"  name="quantity" placeholder="Cantidad" value="{{quantity}}">
	</div>
	<div class="form-group col-lg-3">
		<input type="text" class="form-control"  name="price" placeholder="Precio" value="{{price}}">
	</div>
	<div class="form-group col-lg-3">
		<input type="text" class="form-control"  name="spaces" placeholder="Espacios" value="{{spaces}}">
	</div>
<div class="form-group col-lg-6">
	 <div class="checkbox-inline">
    <label>
    <input type="hidden" value="{{show}}">
    	{{#is_zero show}}
    		<input type="checkbox" name="show" value="1" checked> Total
    	{{else}}
    		<input type="checkbox" name="show" value="1"> Total
    	{{/is_zero}}

    </label>
  </div>
   <div class="checkbox-inline">
    <label>
        <input type="hidden" value="{{iva}}">
    {{#is_zero iva}}
    <input type="checkbox" name="iva" value="1" checked> IVA
    {{else}}
    <input type="checkbox" name="iva" value="1"> IVA
    {{/is_zero}}

    </label>
  </div>
  </div>
</div>
	<div class="form-group">
		<textarea name="note" class="form-control" rows="2"  placeholder="Nota">{{note}}</textarea>
	</div>

	{{#if id}}
		<a href="#" class="product-update btn btn-primary" data-product-id="{{id}}">Guardar</a>
		<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
	{{else}}
		<a href="#" class="product-store btn btn-primary">Guardar</a>
		<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
	{{/if}}

[[ Form::close() ]]

</script>

[[ HTML::modal('product-edit', 'Edit producto') ]]

