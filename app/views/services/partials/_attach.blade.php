<script id="quotation-service-create-template" type="text/x-handlebars-template">
  <div class="modal-body">
    <input type="hidden" value="{{ quotation_id }}" class="quotation-id">
    <form action="#" id="service-search-form">
      <div class="form-group">
        <input type="text" name="query" class="form-control service-query" placeholder="Buscar servicio">
      </div>
    </form>
    <div class="table-responsive">
      <table class="table table-condensed">
      
      </table>
    </div>
  </div>

  <div class="modal-footer">
    <a href="#" class="btn btn-default btn-sm modal-close">Cerrar</a>
  </div>
</script>

<div class="modal fade" id="quotation-service-create-modal">
  <div class="modal-dialog">
    <div class="modal-content">
    </div>
  </div>
</div>