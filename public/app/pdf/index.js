import React from 'react';
import request from 'axios';

const Pdf = React.createClass({
	getDefaultProps() {
		return {
			quotations: [{id: 1}, {id: 2}],
			errors: false
		}
	},

	render() {
		const quoNodes = this.props.quotations.map(quo => {
			return <div key={quo.id}>{quo.id}</div>
		});

		return (
			<div>
				<h1>Render a pdf is the work</h1>
					<span>{this.state.errors ? 'errors' : 'ne'}</span>
				{quoNodes}
			</div>
		)
	}
});

export default Pdf;