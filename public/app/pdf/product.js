import React from 'react';

const Product = React.createClass({

	getSpaces() {
		let i;
		let spaces = [];
		for(i = 0; i <= this.props.product.spaces; i++ ) {
				spaces.push(<br />);
		}
		return spaces;
	},

	getPlural(period, lapse) {
		let plurals = {
			"Mes": "Meses",
			"Semana": "Semanas",
			"Día": "Dias",
			"Hora": "Horas",
			"Servicio": "Servicios",
			"Venta": "Ventas"
		};
		
		return plurals[period] || period;
	},

	getProductImg() {
		const {product} = this.props;
		if(product.name == "Adicional") {
			return 'Adicional'
		} else {
			
			if(product.name == "IT Service 24/7") {
				return <img src='/img/pdf/products/IT Service 247.png' />;
			}

			return <img src={`/img/pdf/products/${product.name}.png`} />;
		}
	},

	render() {
		const {product} = this.props;
		//play with colSpan for complete empty spaces

		return (
			<table cellSpacing="0">
			<tbody>
				<tr>
					<td colSpan="3" className="no-border img-product">
						{this.getProductImg()}
						{ product.type }
					</td>
				</tr>

				<tr style={ product.processor || product.ram || product.hdd ? {} : {'display': 'none'}}>
					<td>
						<span className="title">Procesador:</span> { product.processor }
					</td>

					<td>
						<span className="title">Ram:</span> { product.ram }
					</td>

					<td className="no-border">
						<span className="title">Disco Duro:</span> { product.hdd }
					</td>
				</tr>

				<tr style={ product.monitor || product.burner || product.keyboard ? {} : {'display': 'none'}}>
					<td>
						<span className="title">Monitor:</span>
						{ product.monitor }
					</td>

					<td>
						<span className="title">Unidad optica:</span>
						{ product.burner }
					</td>

					<td className="no-border">
						<span className="title">Teclado & mouse:</span>
						{ product.keyboard }
					</td>
	
				</tr>

				<tr style={ product.network_card || product.battery  ? {} : {'display': 'none'}}>
					<td>
						<span className="title" colSpan={product.battery ? '3' : ''}>Tarjeta de red:</span>
						{ product.network_card }
					</td>

					<td  className="no-border" colSpan="2">
						<span className="title" >Batería:</span>
						{ product.battery }
					</td>
				</tr>

				<tr style={ product.os || product.antivirus ? {} : {'display': 'none'}}>
					<td>
						<span className="title">SO:</span> { product.os }
					</td>

					<td>
						<span className="title" colSpan={product.antivirus ? "2" : ""}>Office:</span>
						{ product.office }
					</td>

					<td className="no-border">
						<span className="title">Antivirus:</span>
						{ product.antivirus }
					</td>
				</tr>

				<tr style={product.additional_1 || product.additional_2 || product.additional_3 ? {} :{'display': 'none'}}>
					<td colSpan="3" className="no-border">
						<span className="title">Adicionales:</span>
						{ product.additional_1 ? `${product.additional_1} /` : ''} 
						{ product.additional_2 ? `${product.additional_2} /` : ''} 
						{ product.additional_3} 
					</td>
				</tr>

				<tr style={product.additional_4 || product.additional_5 || product.additional_6 ? {} :{'display': 'none'}}>
					<td colSpan="3" className="no-border">
						<span className="title">Adicionales:</span>
						{ product.additional_4 ? `${product.additional_4} /` : ''} 
						{ product.additional_5 ? `${product.additional_5} /` : ''} 
						{ product.additional_6} 
					</td>
				</tr>

				<tr>
					<td colSpan="2" className="no-border"><span className="title">Tiempo:</span></td>
					<td className="no-border text-right" >
						{ product.lapse } { product.lapse == 1 && product.period == "Semana" ? " a 7 días" : this.getPlural(product.period) }
					</td>
				</tr>

				<tr>
					<td  colSpan="2" className="no-border">
						<span className="title">Cantidad:</span>
					</td>
					<td className=" no-border text-right">
						{ product.quantity }
					</td>
				</tr>

				<tr>
					<td colSpan="2" className="no-border">
						<span className="title">Precio unitario por {product.lapse == 1 && product.period == "Semana" ? "1 a 7 días" : product.period.toLowerCase() }:</span>
					</td>

					<td className="no-border text-right">
						<span className="price">{ product.price }</span> { product.iva ? '+IVA' : '' }
					</td>
				</tr>

				{product.show ?
				<tr>
					<td colSpan="2" className="no-border">
						<span className="title">Total:</span>
					</td>
					<td className="no-border text-right">{ product.total  } { product.iva ? '+IVA' : '' }</td>
				</tr>
				: <tr></tr>}

				{product.note ? 
				<tr>
					<td colSpan="3" className="no-border">
						<span className="title">Nota:</span>
						{ product.note }
					</td>
				</tr>
				: <tr></tr>}
				
				<tr className="spaces">
					<td colSpan="4" className="no-border spaces">
						{this.getSpaces()}
					</td>
				</tr>
			</tbody>	
			</table>

		)
	}
});

export default Product;