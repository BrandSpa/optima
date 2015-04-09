<script id="todo-create-template" type="text/x-handlebars-template"> 
  <div class="modal-body">
    @include('todos/partials/_form')
  </div>
  <div class="modal-footer">
    <a href="#" class="todo-save-store btn btn-primary btn-sm">Guardar</a>
    <a href="#" class="modal-close btn btn-default btn-sm">Cancelar</a>
  </div>
</script>

<div class="modal fade" id="todo-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>



