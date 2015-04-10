<script id="service-template" type="text/x-handlebars-template">
  <td>{{ title }} </td>
  <td>
  <a href="#" class="btn btn-default btn-xs service-open-edit">Editar</a>
    <div class="btn-group">
      <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li>
          <a href="#" class="service-delete">Eliminar</a>
        </li>
      </ul>
    </div>
  </td>
  <td>$ {{ price_1 }}</td>
  <td>$ {{ price_2 }}</td>

</script>