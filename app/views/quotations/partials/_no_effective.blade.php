<script type="template/x-handlebars-template" id="quotation-no-effective-template">
  <div class="modal-body">
    <div class="form-group">
      <select class="form-control" id="quotation-no-effective-select">
      {{#if no_effective}}
        <option value="{{ no_effective }}">{{ no_effective }}</option>
      {{else}}
        <option value="">¿Por qué no es efectiva?</option>
      {{/if}}
        <option value="No disponible">No disponible</option>
        <option value="No confiable">No confiable</option>
        <option value="Competencia">Competencia</option>
        <option value="Por cliente">Por cliente</option>
      </select>
    </div>
    <div class="form-group">
    <textarea id="no_effective_note" class="form-control" placeholder="nota">{{ no_effective_note }}</textarea>
</div>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn btn-primary btn-sm quotation-no-effective-save">Guardar</a>
    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
  </div>
</script>




