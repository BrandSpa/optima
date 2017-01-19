import React from 'react';
import {connect} from 'react-redux';

const Pdf = React.createClass({
	componentDidMount() {

	},

	render() {
		const quoNodes = this.props.items.map(quo => {
			return <div key={quo.id}>{quo.id}</div>
		});

		return (
			<div>
				<h1>Render a pdf is the work</h1>
				{quoNodes}
			</div>
		)
	}
});

export default connect(store => store.quotations)(Pdf);