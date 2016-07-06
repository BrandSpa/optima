'use strict';
const React = require('react');
const productsOptions = require('options/products.json');
const productsTypesOptions = require('options/product_type.json');
const PeriodsOptions = require('options/periods.json');
const Select = require('components/form_select.jsx');
const _ = require('lodash');

module.exports = React.createClass({
  getInitialState() {
    return {
      product: {},
      errorMessages: {}
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
    return React.findDOMNode(ref).value;
  },

  handleChange() {
    const ref = this.refs;
    let show;
    console.log(this._getValue(ref.show));

    if(this._getValue(ref.show) === 1 || this._getValue(ref.show) === true) {
      show = true;
    } else {
      show = false;
    }

    const product = _.extend(this.state.product, {
      quotation_id: this.props.quotationId,
      name: this._getValue(ref.name.refs.select),
      type: this._getValue(ref.type.refs.select),
      processor: this._getValue(ref.processor),
      ram: this._getValue(ref.ram),
      hdd: this._getValue(ref.hdd),
      burner: this._getValue(ref.burner),
      network_card: this._getValue(ref.network_card),
      battery: this._getValue(ref.battery),
      monitor: this._getValue(ref.monitor),
      keyboard: this._getValue(ref.keyboard),
      os: this._getValue(ref.os),
      office: this._getValue(ref.office),
      antivirus: this._getValue(ref.antivirus),
      additional_1: this._getValue(ref.additional_1),
      additional_2: this._getValue(ref.additional_2),
      additional_3: this._getValue(ref.additional_3),
      additional_4: this._getValue(ref.additional_4),
      additional_5: this._getValue(ref.additional_5),
      additional_6: this._getValue(ref.additional_6),
      lapse: this._getValue(ref.lapse),
      period: this._getValue(ref.period.refs.select),
      quantity: this._getValue(ref.quantity),
      price: this._getValue(ref.price),
      total: this._getValue(ref.lapse) * this._getValue(ref.quantity) * this._getValue(ref.price),
      show: React.findDOMNode(ref.show).checked,
      iva: React.findDOMNode(ref.iva).checked,
      note: this._getValue(ref.note),
      spaces: this._getValue(ref.spaces),
    });

    this.setState({product});
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.product);
  },

  close() {
    this.setState({product: {}});
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
            type="text"
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
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.quantity}/>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="">Precio</label>
          <input
            ref="price"
            type="text"
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
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={product.spaces} />
        </div>

        <div className="form-group col-xs-12">
          <button className="btn btn-primary btn-sm">Guardar</button>
          <button className="btn btn-default btn-sm pull-right" onClick={this.close}>Cerrar</button>
        </div>

      </form>
    )
  }
});