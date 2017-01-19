import React from 'react';

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
					<span>{this.props.errors ? 'errors' : 'ne'}</span>
				{quoNodes}
			</div>
		)
	}
});

export default Pdf;