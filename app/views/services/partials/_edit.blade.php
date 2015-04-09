<script id="service-edit-template" type="text/x-handlebars-template"> 
  <div class="modal-body">
    <form class="form">
        <div class="form-group">
          <input type="text" name="title" class="form-control" placeholder="Titulo" value="{{ title }}">
        </div>
        <div class="form-group">
         <textarea name="text" class="form-control summernote service-text" placeholder="Texto" rows="5">{{ text }}</textarea>
       </div>
       <div class="row">
        <div class="form-group col-lg-6">
          <input type="text" name="price_1" class="form-control" placeholder="Precio 1" value="{{ price_1 }}">
        </div>
        <div class="form-group col-lg-6">
          <input type="text" name="price_2" class="form-control" placeholder="Precio 2" value="{{ price_2 }}">
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
     <a href="#" class="btn btn-primary btn-sm service-save-update ">Guardar</a>
     <a href="#" class="modal-close btn btn-default btn-sm">Cancelar</a>
  </div>
</script>

<div class="modal fade" id="service-edit-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>