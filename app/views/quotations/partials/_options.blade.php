 <script type="template/x-handlebars-template" id="quotation-options-template">
 <h4 class="quotation-labelable">
  Cotización {{ id }}
  {{#if rethink_from }}
    <a href="/quotations/{{ rethink_from }}"><span class="label label-default">{{ rethink_from }}</span></a>
  {{/if}}
  <span class="label label-{{ status }}">{{ status }}</span>
  <span class="label label-{{ status }}">{{ no_effective }}</span>
</h4>
<a href="/quotations/{{ id }}/duplicate" class="btn btn-default btn-sm">Duplicar</a>
<hr>
<div class="quotation-options">
<div class="row">
<div class="col-lg-2">
  <select class="quotation-select-type form-control">
    {{#if type}}
      <option value="{{ type }}">{{ type }}</option>
    {{else}}
     <option value="">Tipo</option>
    {{/if}}
    <option value="Alquiler">Alquiler</option>
    <option value="Servicio">Servicio</option>
  </select>
</div>


<div class="col-lg-2">
  <select  class="quotation-select-client-type form-control">
    {{#if client_type }}
      <option value="{{ client_type }}">{{ client_type }}</option>
    {{else}}
      <option value="">Tipo de cliente</option>
    {{/if }}
     <option value="Activo">Activo</option>
     <option value="Inactivo">Inactivo</option>
     <option value="Nuevo">Nuevo</option>
  </select>
</div>

<div class="col-lg-2">
  <select  class="quotation-select-found-us form-control">
      {{#if found_us }}
        <option value="{{ found_us }}">{{ found_us }}</option>
      {{else }}
        <option value="">¿Como llegó?</option>
      {{/if }}
      @include('_sections.foundus_list')
  </select>
</div>

<div class="col-lg-2">
    <select class="quotation-select-offer form-control">
    {{#if offer }}
      <option value="{{  offer }}">{{ offer }}</option>
    {{else }}
      <option value="">Ofrecer</option>
    {{/if }}
      <option value="Desktops">Desktops</option>
      <option value="Laptops">Laptops</option>
      <option value="Apple">Apple</option>
      <option value="Servers">Servers</option>
      <option value="IT Service">IT Service</option>
      <option value="IT Service 24/7">IT  Service 24/7</option>
      <option value="Rescate Online">Rescate Online</option>
      <option value="Discos Duros Seguros">Discos Duros Seguros</option>
      <option value="Networks">Networks</option>
      <option value="Complements">Complements</option>
      <option value="Printers">Printers</option>
    </select>
</div>
<div class="col-lg-2">
    <select class="quotation-select-advisor form-control">
     {{#if advisor }}
        <option value="{{ advisor }}">{{ advisor }}</option>
      {{else }}
        <option value="">Asesor</option>
      {{/if}}
      <option value="Andres Rojas">Andres Rojas</option>
      <option value="Diego Rojas">Diego Rojas</option>
      <option value="Otros">Otros</option>
    </select>
</div>
</div>
<hr>
  <div class="btn-group btn-md">
    <button class="btn btn-default btn-sm  dropdown-toggle" type="button" data-toggle="dropdown">
      PDF <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li> <a href="/quotations/{{ id }}/pdf/{{ id }}" target="_blank">Color </a> </li>
      <li> <a href="/quotations/{{ id }}/pdflogos" target="_blank">Con logos </a> </li>
      <li> <a href="/quotations/{{ id }}/pdfbn" target="_blank">Blanco y negro </a> </li>
    </ul>
  </div>
  
  <a href="#" class="quotation-open-comment btn btn-default btn-sm">Agregar Comentario</a>
  <a href="#" class="btn btn-default btn-sm quotation-open-mail">Agregar email</a>
  <hr class="visible-xs">

  {{#isEffective status}}

  {{else}}
  <div class="labels pull-right">
    <a href="#" class="btn btn-warning btn-sm quotation-send">Enviar</a>
    <a href="#" class="btn btn-warning btn-sm quotation-change-delivered">Entregada</a>
    <a href="#" class="btn btn-danger btn-sm quotation-open-no-send">No enviada</a>
    
    <a href="/quotations/{{ id }}/rethink" class="btn btn-default btn-sm">Replantear</a>
    </div>
  {{/isEffective}}
</div>
</script>

