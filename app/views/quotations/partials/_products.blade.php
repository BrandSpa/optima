<script id="quotation-product-template" type="x-handlebars-template">
    <td> {{ name }}</td>
    <td> <a href="#" class="btn btn-default btn-xs btn-hidden quotation-product-edit">Editar</a> </td>
    <td>
      {{#fifteen period}}
      {{else}}
        {{ lapse }}
      {{/fifteen}}

      {{#plural lapse}}
        {{period}}
      {{else}}
        {{#pluralMonth period}}
          Meses
        {{else}}
          {{#fifteen period}}
            15 días
          {{else}}
            {{ period }}s
          {{/fifteen}}
        {{/pluralMonth}}
      {{/plural}}
    </td>
    <td>{{ quantity }}</td>
    <td>$ {{formatCurrency price }}</td>
    <td>$ {{formatCurrency total }}</td>
    <td>
      <a class="btn btn-xs btn-default btn-hidden quotation-product-duplicate" data-product="{{ id }}"> Duplicar </a>
      <div class="btn-group">
        <button class="btn btn-default btn-xs btn-hidden dropdown-toggle" type="button" data-toggle="dropdown">
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li>
            <a href="#" class="quotation-product-delete ">Eliminar</a>
          </li>
        </ul>
     
      </div>

    </td>

</script>


