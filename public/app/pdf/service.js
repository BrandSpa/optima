import React from 'react';

const Service = React.createClass({
	getDefaultProps() {
		return {
			service: {}
		}
	},

	render() {
		const {service} = this.props;

		return (
			<div className="page service">
			<div className="divider"></div>
				<div className="service-title">
					<img src="/img/pdf/products/IT Service.png" className="service-img" /> 
					<span>{service.title}</span>
				</div>	
				<div className="divider"></div>
				<div className="service-content">
				<div dangerouslySetInnerHTML={{__html: service.text.replace('precio1', service.price_1).replace('precio2', service.price_2) }} />
					
				</div>
			</div>
		)
	}
});

export default Service;