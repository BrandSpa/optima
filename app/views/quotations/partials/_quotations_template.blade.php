<script type="text/x-handlebars-template" id='quotations-template'>
<table class="table table-striped table-condensed">
  <tr>
    <th> id </th>
    <th>Empresa</th>
    <th>Contacto</th>
    <th>Opciones</th>
  </tr>

  {{#each quotations}}
  <tr>
    <td><a href="/quotations/{{id}}" class="label label-warning">{{ id }}</a></td>
    <td><a href="#" class="company-edit" data-company-id="{{company.id}}">{{ company.name }}</a></td>
    <td><a href="#" class="contact-edit" data-contact-id="{{contact.id}}">{{ contact.name }} {{ contact.lastname }}</a></td>
    <td>
      <div class="btn-group">
        <button class="btn btn-primary btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li>
            <a href="/quotations/{{ id }}/pdfbn" target="_blank" > PDF BN </a>
          </li>
          <li>
            <a href="/quotations/{{ id }}/pdflogos"  target="_blank" > PDF con logos </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#" class="quotation-duplicate" data-quotation-id="{{ id }}">Duplicar</a>
          </li>
        </ul>
      </div>
    </td>
  </tr>
  {{/each}}
</table>
</script>