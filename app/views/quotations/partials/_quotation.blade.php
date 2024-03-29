<script id="quotation-template" type="text/x-handlebars-template">
<td>
  <a href="/quotations/{{ id }}"> {{ id }} </a>&nbsp;
</td>
<td>
  <div class="btn-group">
    <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
      <a href="/quotations/{{ id }}/pdf/{{ id }}" target="_blank"> PDF </a>
      </li>
      <li>
      <a href="/quotations/{{ id }}/pdfbn" target="_blank" > PDF BN </a>
      </li>
      <li>
      <a href="/quotations/{{ id }}/pdflogos"  target="_blank" > PDF con logos </a>
      </li>
    </ul>
  </div>
</td>
<td>
<span class="label label-{{status}}">{{status}}</span>
  {{#if rethink_from }}
    <a href="/quotations/{{ rethink_from }}" class="label label-Replanteada"> {{ rethink_from }} </a>
  {{/if}}
</td>
<td> 
  <a href="#" class="contact-popover" data-content="<b>Dirección:</b> {{ company.address }} <br> <b>nit:</b> {{ company.nit }} <br> <b>Teléfono:</b> {{ company.phone }} <br> ">
{{ company.name }} 
</a>
</td>
<td>
  <a href="#" class="contact-popover" data-content="<b>Email:</b> {{ contact.email }} <br> <b>Teléfono:</b> {{ contact.phone_1 }} <br> <b>Celular:</b> {{ contact.mobile_1 }} <br> ">
    {{ contact.name }} {{ contact.lastname }}
  </a>
</td>

<td>
  <a href="#" class="timeago-popover" data-content="<b>Fecha y hora:</b> {{ created_at }}">
  <span class="timeago" title="{{ created_at }}">{{ created_at }}</span>
  </a>
</td>

</script>

