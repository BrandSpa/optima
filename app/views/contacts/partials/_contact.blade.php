<script id="contact-template" type="text/x-handlebars-template">    
    <td>{{name}} {{lastname}} <a href="#" data-contact-id="{{ id }}" class="btn btn-default btn-xs contact-open-edit">Editar</a></td>
    <td>{{ email }}</td>
    <td>
      {{ mobile_1 }} {{#if mobile_2 }} - {{mobile_2}} {{/if}}
    </td>
    <td>
      {{ phone_1 }} {{#if phone_2 }} - {{phone_2}} {{/if}}
    </td>
    <td>{{ company.name }}</td>
</script>