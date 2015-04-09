<script type="template/x-handlebars-template" id="quotation-no-send-template">
  <div class="modal-body">
    <div class="form-group">
      <select class="form-control" id="quotation-no-send-select">
      {{#if status_cause }}
        <option value="{{ status_cause }}">{{ status_cause }}</option>
      {{else}}
        <option value="">¿Por qué no es enviada?</option>
      {{/if}}
        <option value="No confiable">No confiable</option>
        <option value="Competencia">Competencia</option>
        <option value="Por cliente">Por cliente</option>
      </select>
    </div>
    <div class="form-group">
    <textarea id="no_send_note" class="form-control" placeholder="nota">{{ no_send_note }}</textarea>
</div>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn btn-primary btn-sm quotation-no-send-save">Guardar</a>
    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
  </div>
</script>


<div class="modal fade" id="quotation-no-send-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->



