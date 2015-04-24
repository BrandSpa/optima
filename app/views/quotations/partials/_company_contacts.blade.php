<script type="template/x-handlebars-template" id="quotation-company-contact-template">
  <select name="contact_id" class="form-control" id="select-company-contact">
    <option value="">Seleccionar Contacto</option>
    {{#each [] }}
      <option value="{{ id }}">{{ name }} {{ lastname }}</option>
    {{/each}}
  </select>
</script>

