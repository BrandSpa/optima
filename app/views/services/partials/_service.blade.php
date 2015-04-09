<script id="service-template" type="text/x-handlebars-template">
  <td>{{ title }} <a href="#" class="btn btn-default btn-xs service-open-edit">Editar</a></td>
  <td>$ {{ price_1 }}</td>
  <td>$ {{ price_2 }}</td>
  <td>
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
</script>