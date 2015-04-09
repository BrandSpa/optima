<script type="template/x-handlebars-template" id="quotation-company-contact-template">
  <select name="contact_id" class="form-control" id="select-company-contact">
    <option value="">Seleccionar Contacto</option>
    {{#each [] }}
      <option value="{{ id }}">{{ name }} {{ lastname }}</option>
    {{/each}}
  </select>
</script>

<div class="modal fade" id="quotation-company-contacts-modal">
  <div class="modal-dialog">
    <div class="modal-content">
     <div class="modal-body">
      <div class="select"></div>
    </div>
    <div class="modal-footer">
      <a href="#" class="quotation-contact-change btn btn-primary btn-sm">Guardar</a>
      <a href="#" class="btn btn-default btn-sm modal-close" >Cancelar</a>
    </div>
  </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

