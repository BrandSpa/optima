import React from 'react';
import request from 'axios';

const Pdf = React.createClass({
	getInitialState() {
		return {
			quotations: [],
			errors: false
		}
	},

	componentWillMount() {
		request
      .get('/api/v1/quotations')
			.then(res => this.setState({quotations: res.data}))
			.catch(err => this.setState({errors: true}));
	},

	render() {
		const quoNodes = this.state.quotations.map(quo => {
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