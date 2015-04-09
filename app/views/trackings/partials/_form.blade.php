<form action="#" class="form" id="tracking-create-form">
  <div class="row">

    <div class="col-lg-12">
      <div class="form-group">
        <select name="contact_id" class="form-control">
          <option value="">Seleccionar Contacto</option>
          {{#each []}}
          <option value="{{ id }}">{{ name }} {{ lastname }}</option>
          {{/each}}
        </select>
      </div>
    </div>

    <div class="form-group col-lg-6">
      <input type="text" name="register_date" class="form-control datepicker" placeholder="Fecha">
    </div>

    <div class="form-group col-lg-6">
      <input type="text" name="register_time" class="form-control timepicker" placeholder="Hora">
    </div>

  </div>  
  <div class="form-group"><textarea name="report"  rows="4" class="form-control" placeholder="Reporte"></textarea></div>
</form>