'use strict';
var React = require('react');
var _ = require('underscore');
var Input = require('components/form_input.jsx');
var Select = require('components/form_select.jsx')
var Textarea = require('components/form_textarea.jsx')
var sectors = require('options/sectors.json');
var cities = require('options/cities.json');
var productsOptions = require('options/products.json');

module.exports = React.createClass({

  render: function() {
    return (
        <div className="modal-body">
 <form className="product-create-form">
  <input type="hidden" name="quotation_id" value="{{ quotation_id }}">
  <div className="row">
  <div className="form-group col-lg-3">
      <Select
            ref="name"
            options={productsOptions}
            default="Producto"
            onSelectChange={this.handleChange}
            value={product.name}
          />

    <select name="name" className="form-control select-product-name">
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
      <option value="Adicional">Adicional</option>
    </select>
  </div>

  <div className="form-group col-lg-3">
    <Select
            ref="type"
            options={productsOptions}
            default="Producto"
            onSelectChange={this.handleChange}
            value={product.type}
          />

    <select name="type" className="form-control">

      <option value="WorkPro">WorkPro</option>
      <option value="WorkPlus">WorkPlus</option>
      <option value="WorkPremium">WorkPremium</option>
    </select>
  </div>

  <div className="config">
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="processor" placeholder="Procesador" value="{{processor}}">
    </div>
    <div className="form-group col-lg-6 ">
      <input type="text" className="form-control" name="ram" placeholder="RAM" value="{{ram}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="hdd" placeholder="Disco Duro" value="{{hdd}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="burner" placeholder="Unidad optica" value="{{burner}}">
    </div>
      <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="network_card" placeholder="Tarjeta red" value="{{network_card}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="battery" placeholder="Batería" value="{{battery}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="monitor" placeholder="Monitor" value="{{monitor}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="keyboard" placeholder="Teclado & Mouse" value="{{keyboard}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="os" placeholder="Sistema operativo" value="{{os}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="office" placeholder="Office" value="{{office}}">
    </div>
    <div className="form-group col-lg-6">
      <input type="text" className="form-control" name="antivirus" placeholder="Antivirus" value="{{antivirus}}">
    </div>
  </div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_1" className="additional form-control" placeholder="Adicional" value="{{ additional_1}}">
</div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_2" className="additional form-control" placeholder="Adicional" value="{{ additional_2 }}">
</div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_3" className="additional form-control" placeholder="Adicional" value="{{ additional_3 }}">
</div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_4" className="additional form-control" placeholder="Adicional" value="{{ additional_4 }}">
</div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_5" className="additional form-control" placeholder="Adicional" value="{{ additional_5 }}">
</div>
<div className="form-group col-lg-6">
  <input type="text" name="additional_6" className="additional form-control" placeholder="Adicional" value="{{ additional_6 }}">
</div>

  <div className="form-group col-lg-3">
    <input type="text" className="form-control additional" className="form-control" name="lapse" placeholder="Lapso" value="{{lapse}}">
  </div>
  <div className="form-group col-lg-3">
    <select name="period" className="form-control">
    {{#if period}}
      <option value="{{period}}">{{period}}</option>
    {{else}}
      <option value="">Periodo</option>
    {{/if}}

      <option value="Mes">Mes</option>
      <option value="Semana">Semana</option>
      <option value="Día">Día</option>
      <option value="15 días">15 días</option>
      <option value="a 3 días">3 días</option>
      <option value="Hora">Hora</option>
      <option value="Servicio">Servicio</option>
      <option value="Venta">Venta</option>
    </select>
  </div>
  <div className="form-group col-lg-3">
    <input type="text" className="form-control"  name="quantity" placeholder="Cantidad" value="{{quantity}}">
  </div>
  <div className="form-group col-lg-3">
    <input type="text" className="form-control"  name="price" placeholder="Precio" value="{{price}}">
  </div>
  <div className="form-group col-lg-3">
    <input type="text" className="form-control"  name="spaces" placeholder="Espacios" value="{{spaces}}">
  </div>
<div className="form-group col-lg-6">
   <div className="checkbox-inline">
    <label>
    <input type="hidden" value="{{show}}">
      {{#is_zero show}}
        <input type="hidden" name="show" value="0">
        <input type="checkbox" name="show" value="1" checked> Total
      {{else}}
        <input type="hidden" name="show" value="0">
        <input type="checkbox" name="show" value="1"> Total
      {{/is_zero}}

    </label>
  </div>
   <div className="checkbox-inline">
    <label>
    <input type="hidden" value="{{iva}}">
    {{#is_zero iva}}
      <input type="hidden" name="iva" value="0">
      <input type="checkbox" className="field-checkbox"  name="iva" value="1" checked> IVA
    {{else}}
      <input type="hidden" name="iva" value="0">
     <input type="checkbox" className="field-checkbox"  name="iva" value="1" > IVA
    {{/is_zero}}
    </label>
  </div>
  </div>
</div>
  <div className="form-group">
    <textarea name="note" className="form-control" rows="2"  placeholder="Nota">{{note}}</textarea>
  </div>
</form>
</div>
<div className="modal-footer">
  {{#if id}}
    <a href="#" className="quotation-product-update btn btn-primary btn-sm">Guardar</a>
    <a href="#" className="btn btn-default btn-sm modal-close" >Cancelar</a>
  {{else}}
    <a href="#" className="quotation-product-save btn btn-primary btn-sm">Guardar</a>
    <a href="#" className="btn btn-default btn-sm modal-close" >Cancelar</a>
  {{/if}}
</div>

    );
  }
});