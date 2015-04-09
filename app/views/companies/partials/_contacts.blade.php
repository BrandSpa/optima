<script id="company-contacts-template" type="text/x-handlebars-template"> 
  <div class="modal-body">
    <table class="table table-condensed table-striped">
      <tr>
        <th>Contacto</th>  
        <th>Email</th>  
        <th>Celular</th>  
        <th>Teléfono</th>
      </tr>
      {{#each contacts}}
      <tr>
        <td>{{ name }} {{ lastname }}</td>
        <td>{{ email }}</td>
        <td>{{ mobile_1 }}</td>
        <td>{{ phone_1 }}</td>
      </tr>
      {{/each}}
    </table>
  </div>
</script>

<div class="modal fade" id="company-contacts-modal">
  <div class="modal-dialog">
    <div class="modal-content"> </div>
  </div>
</div>
