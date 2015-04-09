<script id="tracking-template" type="text/x-handlebars-template">
  <div class="panel panel-default">
    <div class="panel-heading">
      <span><b>Hablo con:</b> {{ contact.name }} {{ contact.lastname }}</span>
      <span class="pull-right">{{ register_at_date }} {{ register_at_time }}</span>
    </div>
    <div class="panel-body">
      <p> {{ report }} </p>
      <a href="#" class="pull-right btn btn-primary btn-sm todo-open-create">Agregar Tarea</a>
      <hr>
    <table class="table table-condensed">
      <thead>
  <tr>
    <th>Tarea</th>
    <th>Creada</th>
    <th>Vencimiento</th>
    <th>Usuario</th>
  </tr>
</thead>
     <tbody>
    {{#each todos}}
      <tr>
      <td>{{description}}</td>
      <td>{{created_at}}</td>
      <td>{{expires_date}} {{ expires_time }}</td>
      <td>{{user.name}} {{ user.lastname }}</td>

      </tr>
    {{/each}}
    </tbody>
     </table>
    </div>
   
  </div>
</script>



