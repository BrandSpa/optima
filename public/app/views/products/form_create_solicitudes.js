'use strict';
import React from 'react';
import productsOptions from '../../options/products.json';
import productsTypesOptions from '../../options/product_type.json';
import PeriodsOptions from '../../options/periods.json';
import Select from '../../components/form_select';

const productFormSolicitudes = React.createClass({
  getInitialState() {
    return {
      product: {
        solicitudes_id: '',
        name: '',
        type: '',
        processor: '',
        ram: '',
        hdd: '',
        burner: '',
        network_card: '',
        battery: '',
        monitor: '',
        keyboard: '',
        os: '',
        office: '',
        antivirus: '',
        additional_1: '',
        additional_2: '',
        additional_3: '',
        additional_4: '',
        additional_5: '',
        additional_6: '',
        lapse: '',
        period: '',
        quantity: '',
        price: '',
        total: '',
        show: 0,
        iva: 0,
        note: '',
        spaces: ''
      },
      additional: false,
      errors: []
    };
  },

  getDefaultProps() {
    return {
      product: {},
      errors: []
    }
  },

  componentDidMount() {
    let product = {...this.state.product, ...this.props.product};
    this.setState({product});
  },

  componentWillReceiveProps(props) {
    let product = {...this.state.product, ...props.product};
    product = {...product, solicitudes_id: this.props.solicitudId};
    this.setState({product});
  },

  handleChangeInput(field, e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    let product = {...this.state.product, [field]: val};
    let additional = field == 'name' && val == 'Adicional' || val == 'Complements' ?  true : false;
    if(field == 'price' || field == 'quantity' || field == 'lapse') product = this.getTotal(product);
    this.setState({product, additional: additional});
  },

  handleChangeCheckbox(field, e) {
    let val = e.currentTarget.checked;
    let product = {...this.state.product, [field]: val};
    this.setState({product});
  },

  getTotal(product) {
    let total = parseInt(product.lapse) * parseInt(product.quantity) * parseInt(product.price);
    return {...product, total};
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
    const {product} = this.state;

    return (
      <form id="product-form" className="form" onSubmit={this.handleSubmit}>
        <div className="form-group col-md-6">
          <label >Producto</label>
          <Select
            ref="name"
            options={productsOptions}
            default="Seleccionar producto"
            onSelectChange={this.handleChangeInput.bind(null, 'name')}
            value={product.name}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Tipo</label>
          <Select
            ref="type"
            options={productsTypesOptions}
            default="Seleccionar tipo"
            onSelectChange={this.handleChangeInput.bind(null, 'type')}
            value={product.type}
          />
        </div>
        <div className={this.state.additional ? "additional-hide hide" : ""}>
          <div className="form-group col-md-6">
            <label >Procesador</label>
            <input
              type="text"
              className="form-control input-processor"
              onChange={this.handleChangeInput.bind(null, 'processor')}
              value={product.processor}
            />
          </div>

          <div className="form-group col-md-6">
            <label>RAM</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'ram')}
              value={product.ram}/>
          </div>

          <div className="form-group col-md-6">
            <label >Disco duro</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'hdd')}
              value={product.hdd}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Unidad optica</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'burner')}
              value={product.burner}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Tarjeta de red</label>
            <input
              ref="network_card"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'network_card')}
              value={product.network_card}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Batería</label>
            <input
              ref="battery"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'battery')}
              value={product.battery}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Monitor</label>
            <input
              ref="monitor"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'monitor')}
              value={product.monitor}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Teclado y mouse</label>
            <input
              ref="keyboard"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'keyboard')}
              value={product.keyboard}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Sistema operativo</label>
            <input
              ref="os"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'os')}
              value={product.os}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Office</label>
            <input
              ref="office"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'office')}
              value={product.office}
            />
          </div>

          <div className="form-group col-md-6">
            <label >Antivirus</label>
            <input
              ref="antivirus"
              type="text"
              className="form-control"
              onChange={this.handleChangeInput.bind(null, 'antivirus')}
              value={product.antivirus}
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_1"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_1')}
            value={product.additional_1}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_2"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_2')}
            value={product.additional_2}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_3"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_3')}
            value={product.additional_3}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_4"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_4')}
            value={product.additional_4}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_5"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_5')}
            value={product.additional_5}
          />
        </div>

        <div className="form-group col-md-6">
          <label >Adicional</label>
          <input
            ref="additional_6"
            type="text"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'additional_6')}
            value={product.additional_6}/>
        </div>

        <div className="col-md-12"></div>

        <div className="form-group col-md-3">
          <label >Lapso</label>
          <input
            ref="lapse"
            type="number"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'lapse')}
            value={product.lapse}/>
        </div>

        <div className="form-group col-md-3">
          <label >Periodo</label>
           <Select
            ref="period"
            options={PeriodsOptions}
            default="Seleccionar periodo"
            onSelectChange={this.handleChangeInput.bind(null, 'period')}
            value={product.period}
            />
        </div>

        <div className="form-group col-md-3">
          <label >Cantidad</label>
          <input
            ref="quantity"
            type="number"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'quantity')}
            value={product.quantity}/>
        </div>

        <div className="form-group col-md-3">
          <label >Precio</label>
          <input
            ref="price"
            type="number"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'price')}
            value={product.price}/>
        </div>

        <div className="form-group col-xs-12">
          <label >Nota</label>
          <textarea
            ref="note"
            cols="4"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'note')}
            value={product.note}></textarea>
        </div>

        <div className="checkbox col-md-3">
           <label>
            <input
              ref="iva"
              type="checkbox"
              onChange={this.handleChangeCheckbox.bind(null, 'iva')}
              checked={product.iva}
              value={product.iva}
            /> <span>Mostrar IVA {product.iva}</span>
          </label>
        </div>

        <div className="checkbox col-md-3" style={{'marginTop': '10px'}}>
          <label>
            <input
              type="checkbox"
              onChange={this.handleChangeCheckbox.bind(null, 'show')}
              checked={product.show}
              value={product.show}
              /> <span>Mostrar total</span>
          </label>
        </div>

        <div className="form-group col-md-3">
          <label >Espacios pdf</label>
          <input
            ref="spaces"
            type="number"
            className="form-control"
            onChange={this.handleChangeInput.bind(null, 'spaces')}
            value={product.spaces} 
          />
        </div>

        <div 
          className="alert alert-danger col-md-12" 
          style={this.props.errors.length ? {} : {display: 'none'}}
        >
          {this.props.errors}
        </div>

        <div className="form-group col-xs-12">
          <button className="btn btn-primary btn-sm pull-right">Guardar</button>
          <button className="btn btn-default btn-sm pull-left" onClick={this.close}>Cerrar</button>
        </div>

      </form>
    )
  }
});

export default productFormSolicitudes;