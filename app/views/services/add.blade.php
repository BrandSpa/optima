<script id="services-create-template" type="text/x-handlebars-template">
  <form>
  <div class="form-group">
      <select class="form-control" name="title" id="">
        <option value="">Seleccionar Servicio</option>
        {{#each []}}
          <option value="{{id}}">{{title}}</option>
        {{/each}}
      </select>
  </div>
   <a href="#" class="btn btn-primary btn-sm service-attach">Agregar</a>
   <button type="button" class="btn  btn-default btn-sm" data-dismiss="modal">Cancelar</button>
  </form>
 </script>
 
[[HTML::modal('service-create', 'Ingresar servicio')]]