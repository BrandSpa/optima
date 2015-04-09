<script id="company-quote-create-template" type="text/x-handlebars-template"> 
  <div class="modal-body">
    <form action="" id="company-search-form">
      <div class="form-group">
        <input type="text" name="query" class="form-control company-query" placeholder="Buscar Empresa">
      </div>
    </form>
    <div id="company-results">
      <table class="table table-striped table condensed"></table>
    </div>
  <hr>
    @include('companies/partials/_form')
  </div>
    
  <div class="modal-footer">
    <a href="#" class="company-quote-store btn btn-primary btn-sm">Siguiente</a>
    <a href="#" class="modal-close btn btn-default btn-sm">Cancelar</a>
  </div>
</script>

<div class="modal fade" id="company-quote-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>


