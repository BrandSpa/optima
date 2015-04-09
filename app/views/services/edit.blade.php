<script id="service-edit-prices-template" type="text/x-handlebars-template">
	<form method="POST">
	<p>Actualizar precios</p>
	<div class="row">
		<div class="form-control-group col-lg-6">
				<input type="text" name="price_1" class="form-control" placeholder="precio 1" value="{{price_1}}">
		</div>
		<div class="form-control-group col-lg-6">
			<input type="text" name="price_2" class="form-control" placeholder="precio 2" value="{{price_2}}">
		</div>
	</div>
	<p></p>
	<a href="#" class="service-update-prices btn btn-primary btn-sm" data-service-id="{{id}}">Guardar</a>
</form>
</script>
[[ HTML::modal('service-edit-prices', 'Servicio') ]]

<script id="service-edit-old-template" type="text/x-handlebars-template">
  <form action="">
          <div class="form-group">
            <input type="text" name="title" class="form-control" placeholder="Titulo" value="{{title}}">
          </div>
          <div class="form-group">
           <textarea name="text" class="form-control textarea-edit" placeholder="Texto" rows="20">{{text}}</textarea>
         </div>
         <div class="row">
          <div class="form-group col-lg-6">
            <input type="text" name="price_1" class="form-control" placeholder="Precio 1" value="{{price_1}}">
          </div>
          <div class="form-group col-lg-6">
            <input type="text" name="price_2" class="form-control" placeholder="Precio 2" value="{{price_2}}">
          </div>
        </div>
        <a href="#" class="btn btn-primary service-update" data-service-id="{{id}}">Actualizar</a>
  </form>
</script>

[[ HTML::modal('service-edit', 'Servicio') ]]