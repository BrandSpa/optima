'use strict';
import React from 'react';
import productsOptions from 'options/products.json';
import productsTypesOptions from 'options/product_type.json';
import PeriodsOptions from 'options/periods.json';
import Select from 'components/form_select';
import _ from 'lodash';

module.exports = React.createClass({
  getInitialState() {
    return {
      product: {},
      errors: []
    };
  },

  getDefaultProps() {
    return {
      product: {}
    }
  },

  componentDidMount() {
    this.setState({product: this.props.product});
  },

  componentWillReceiveProps(props) {
    this.setState({product: props.product});
  },

  _getValue(ref) {
    return ref.value;
  },

  handleChange() {
    const ref = this.refs;
    let show;

    if(this._getValue(ref.show) === 1 || this._getValue(ref.show) === true) {
      show = true;
    } else {
      show = false;
    }

    const product = _.extend(this.state.product, {
      quotation_id: this.props.quotationId,
      name: ref.name.refs.select.value,
      type: ref.type.refs.select.value,
      processor: ref.processor.value,
      ram: ref.ram.value,
      hdd: ref.hdd.value,
      burner: ref.burner.value,
      network_card: ref.network_card.value,
      battery: ref.battery.value,
      monitor: ref.monitor.value,
      keyboard: ref.keyboard.value,
      os: ref.os.value,
      office: ref.office.value,
      antivirus: ref.antivirus.value,
      additional_1: ref.additional_1.value,
      additional_2: ref.additional_2.value,
      additional_3: ref.additional_3.value,
      additional_4: ref.additional_4.value,
      additional_5: ref.additional_5.value,
      additional_6: ref.additional_6.value,
      lapse: ref.lapse.value,
      period: ref.period.refs.select.value,
      quantity: ref.quantity.value,
      price: ref.price.value,
      total: ref.lapse.value * ref.quantity.value * ref.price.value,
      show: ref.show.checked,
      iva: ref.iva.checked,
      note: ref.note.value,
      spaces: ref.spaces.value,
    });

    this.setState({product});
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.product);
  },

  close(e) {
    e.preventDefault();
    this.props.onClose();
  },


  render() {
    const product = this.state.product;
    let iva;
    let show;

    if(product.iva == 1 || product.iva == true) {
      iva = true
    } else {
      iva = false
    }

    if(product.show == 1 || product.show == true) {
      show = true
    } else {
      show = false
    }

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group col-md-6">
          <label htmlFor="">Producto</label>
          <Select
            ref="name"
            options={productsOptions}
            default="Seleccionar producto"
            onSelectChange={this.handleChange}
            value={product.name}
            />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Tipo</label>
          <Select
            ref="type"
            options={productsTypesOptions}
            default="Seleccionar tipo"
            onSelectChange={this.handleChange}
            value={product.type}
            />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Procesador</label>
          <input
            ref="processor"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.processor}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">RAM</label>
          <input
            ref="ram"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.ram}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Disco duro</label>
          <input
            ref="hdd"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.hdd}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Unidad optica</label>
          <input
            ref="burner"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.burner}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Tarjeta de red</label>
          <input
            ref="network_card"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.network_card}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Batería</label>
          <input
            ref="battery"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.battery}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Monitor</label>
          <input
            ref="monitor"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.monitor}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Teclado y mouse</label>
          <input
            ref="keyboard"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.keyboard}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Sistema operativo</label>
          <input
            ref="os"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.os}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Office</label>
          <input
            ref="office"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.office}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Antivirus</label>
          <input
            ref="antivirus"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.antivirus}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_1"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_1}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_2"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_2}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_3"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_3}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_4"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_4}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_5"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_5}/>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Adicional</label>
          <input
            ref="additional_6"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.additional_6}/>
        </div>

        <div className="col-md-12"></div>

        <div className="form-group col-md-3">
          <label htmlFor="">Lapso</label>
          <input
            ref="lapse"
            type="number"
            className="form-control"
            onChange={this.handleChange}
            value={product.lapse}/>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="">Periodo</label>

           <Select
            ref="period"
            options={PeriodsOptions}
            default="Seleccionar periodo"
            onSelectChange={this.handleChange}
            value={product.period}
            />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="">Cantidad</label>
          <input
            ref="quantity"
            type="number"
            className="form-control"
            onChange={this.handleChange}
            value={product.quantity}/>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="">Precio</label>
          <input
            ref="price"
            type="number"
            className="form-control"
            onChange={this.handleChange}
            value={product.price}/>
        </div>

        <div className="form-group col-xs-12">
          <label htmlFor="">Nota</label>
          <textarea
            ref="note"
            cols="4"
            className="form-control"
            onChange={this.handleChange}
            value={product.note}></textarea>
        </div>

        <div className="checkbox col-md-3">
           <label>
            <input
              ref="iva"
              type="checkbox"
              onChange={this.handleChange}
              checked={iva}/> <span>Mostrar IVA</span>
          </label>
        </div>

        <div className="checkbox col-md-3" style={{'marginTop': '10px'}}>
          <label>
            <input
              ref="show"
              type="checkbox"
              onChange={this.handleChange}
              checked={show}/> <span>Mostrar total</span>
          </label>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="">Espacios pdf</label>
          <input
            ref="spaces"
            type="number"
            className="form-control"
            onChange={this.handleChange}
            value={product.spaces} />
        </div>
          <div className="alert alert-danger col-md-12" style={this.props.errors.length ? {} : {display: 'none'}}>
            {this.props.errors}
          </div>

        <div className="form-group col-xs-12">
          <button className="btn btn-primary btn-sm">Guardar</button>
          <button className="btn btn-default btn-sm pull-right" onClick={this.close}>Cerrar</button>
        </div>

      </form>
    )
  }
});
