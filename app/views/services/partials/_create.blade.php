<script id="service-create-template" type="text/x-handlebars-template"> 
  <div class="modal-body">
    <form class="form">
        <div class="form-group">
          <input type="text" name="title" class="form-control" placeholder="Titulo">
        </div>
        <div class="form-group">
         <textarea name="text" class="form-control summernote service-text" placeholder="Texto" rows="5"></textarea>
       </div>
       <div class="row">
        <div class="form-group col-lg-6">
          <input type="text" name="price_1" class="form-control" placeholder="Precio 1">
        </div>
        <div class="form-group col-lg-6">
          <input type="text" name="price_2" class="form-control" placeholder="Precio 2">
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
     <a href="#" class="btn btn-primary btn-sm service-create-store ">Guardar</a>
     <a href="#" class="modal-close btn btn-default btn-sm">Cancelar</a>
  </div>
  
</script>

<div class="modal fade" id="service-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>