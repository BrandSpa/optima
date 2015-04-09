<form action="#">
  <div class="row">
    <input type="hidden" name="tracking_id" value="{{ tracking_id }}">
  <div class="col-lg-12">
    <div class="form-group">
      <select name="user_id" class="form-control">
        <option value="">Seleccionar Usuario</option>
        {{#each users}}
          <option value="{{ id }}">{{ name }} {{ lastname }}</option>
        {{/each}}
      </select>
    </div>
  </div>

  <div class="form-group col-lg-6">
    <input type="text" name="expires_date" class="form-control datepicker" placeholder="Vencimiento fecha">
  </div>

  <div class="form-group col-lg-6">
    <input type="text" name="expires_time" class="form-control timepicker" placeholder="Vencimiento hora">
  </div>
  
  <div class="form-group col-lg-12">
    <input type="text" name="title" class="form-control" placeholder="Título">
  </div>
  
  <div class="form-group col-lg-12">
    <textarea name="description" class="form-control" rows="4" placeholder="Tarea"></textarea>
  </div>
  </div>
</form>