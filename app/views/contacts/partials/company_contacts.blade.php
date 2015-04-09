<form action="#" class="form" id="quotation-company-contacts-form">
  <div class="form-group">
    <select name="contact_id" class="form-control">
    <option value="">Seleccionar Contacto</option>
      {{#each contacts}}
        <option value="{{ id }}">{{ name }} {{ lastname }}</option>
      {{/each}}
    </select>
  </div>
</form>


