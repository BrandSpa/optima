import React from 'react';
import Product from './product';
import Service from './service';

const Pdf = React.createClass({
	getDefaultProps() {
		return {
			quotation: {
				products: [],
				services: []
			}
		}
	},

	getOfferImage() {
		const {quotation} = this.props;
		if(quotation.offer) {
			if(quotation.offer == "IT	Service 24/7") {
				return <img src="/img/pdf/banners/IT Service 247.png" alt="" id="banner" />
			} else {
				return <img src={`/img/pdf/banners/${quotation.offer}.png`} alt="" id="banner" />
			}
		}
	},

	render() {
		const {quotation} = this.props;

		const products = quotation.products.map((product, i) => {
			return <Product key={i} product={product} />
		});

		const services = quotation.services.map((service, i) => {
			return <Service key={i} service={service} />
		});

		return (
			<div>
			<div id="header">
				<img src='/img/pdf/header-men.jpg' />
				<span>{ quotation.id }</span>
			</div>
				<div id="contact">
					<p>{ quotation.company.name }</p>
					<p>{ quotation.contact.title ? quotation.contact.title : '' }{ quotation.contact.name } { quotation.contact.lastname }</p>
					<p>{ quotation.contact.position }</p>
					<p>{ quotation.company.address }</p>
					<p>{ quotation.contact.mobile_1 }</p>
					<p>{ quotation.contact.phone_1 }</p>
					<p>{ quotation.contact.phone_2 }</p>
				</div>
				
					<div id="content" className="page">
					<p>
						En Avante trabajamos para que usted y su compañía tengan a mano herramientas tecnológicas siempre actualizadas.
						Nuestro modelo de Renting le permite contar con equipos de última tecnología a su medida,
						en las principales marcas del mundo, por los periodos que su compañía los necesite,
						ofreciéndole grandes ventajas tributarias y valores agregados fundamentales como nuestro Servicio Técnico 24/7®,
						Discos Duros Seguros®, Rescate Online® entre otros, <br/>(adjunto encontrará nuestro portafolio de soluciones).
					</p>

					<p>
						Atendiendo a su solicitud nos complace enviar la cotización de los productos y servicios solicitados,
						estamos dispuestos a atender cualquier inquietud y por supuesto a presentarle todo nuestro portafolio,
						en el que de seguro encontrará nuevas herramientas para su empresa.
					</p>
				</div>
				{products}
				{services}
				
				<div className="divider"></div>
				<span className="comment-title">Observaciónes</span>
				<div className="divider"></div>
				<div className="comment-content">
					<div dangerouslySetInnerHTML={{__html: quotation.comment}} />
				</div>

					<img src="/img/pdf/includes.png" alt="" id="banner_includes" />

					{this.getOfferImage()}

					<div className="message">
						<p>
							Para hacer los mantenimientos preventivos el cliente debe enviar solicitud a nuestro departamento
							de Infraestructura Y Tecnología a los correos  tecnico@rentadvisor.com.co y/o ctecnico@rentadvisor.com.co
						</p>
					</div>

					<img src={`/img/pdf/firmas/${quotation.user.name}-${quotation.user.lastname}.png`} id="firm" />
					<span className="firm">{ quotation.user.name } { quotation.user.lastname}</span>
					<span className="firm">{quotation.user.id == 3 ? 'Coordinador Comercial' : 'Asesor Comercial' }</span>
					<span className="firm">comercial@rentadvisor.com.co</span>
					<span className="firm">PBX 6 36 10 51</span>

					<img src="/img/pdf/final.jpg" alt="" id="final" />

			</div>
		)
	}
});

export default Pdf;