<div class="table-responsive">
 </div>

<script type="template/x-handlebars-template" id="quotation-contact-template">

  <table class="table table-condensed">
      <tr>
      <td>
        {{ company.name }}
        <a href="#" class="btn btn-default btn-xs hidden">Editar</a>
      </td>
    </tr>
    <tr>
      <td>{{ name }} {{ lastname }}
        <a href="#" class="btn btn-default btn-xs quotation-contact-edit">Editar</a>
      </td>
    </tr>
    <tr>
      <td><a href="mailto:{{ contact.email }}">{{ email }}</a></td>
    </tr>
    <tr>
      <td>Teléfonos: {{ phone_1 }}  {{#if phone_2}}/ {{ phone_2 }}  {{/if}}</td>
    </tr>
    <tr>
      <td>Celulares: {{ mobile_1 }} {{#if mobile_2}}/ {{ mobile_2 }}  {{/if}}</td>
    </tr>
     </table>

</script>



