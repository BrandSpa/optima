  <form id="company-create-form">
    <div class="row">
      <div class="form-group col-lg-6">
        <input type="text" name="name" class="form-control" placeholder="Razón social" value="{{ name }}">
      </div>

      <div class="form-group col-lg-6">
        <input type="text" name="nit" class="form-control" placeholder="NIT" value="{{ nit }}">
      </div>
    
      <div class="form-group col-lg-6">
        <select name="sector" class="form-control">
          {{#if sector}}
            <option value="{{ sector }}">{{ sector }}</option>
          {{else}}
            <option value="">Sector</option>
          {{/if}}
          @include('_sections.sectors_list')
        </select>
      </div>

      <div class="form-group col-lg-6">
        <select name="city" class="form-control">
          {{#if city}}
            <option value="{{ city }}">{{ city }}</option>
          {{else}}
             <option value="">Ciudad</option>
          {{/if}}
          @include('_sections.citys_list')
        </select>
      </div>
    </div>

    <div class="form-group">
      <input type="text" name="address" class="form-control" placeholder="Dirección" value="{{ address }}">
    </div>

    <div class="row">
      <div class="form-group col-lg-6">
        <input type="text" name="phone" class="form-control" placeholder="Teléfono" value="{{ phone }}">
      </div>

      <div class="form-group col-lg-6">
        <input type="text" name="web" class="form-control" placeholder="Web" value="{{ web }}">
      </div>
    </div>

    <div class="form-group">
      <textarea name="comment" class="form-control"  rows="2" class="span6" placeholder="Comentario">{{ comment }}</textarea>
    </div>
  </form>