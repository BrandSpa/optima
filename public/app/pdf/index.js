import React from 'react';


const Pdf = React.createClass({
	getDefaultProps() {
		return {
			items: [{id: 1}, {id: 2}]
		}
	},
	
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

export default Pdf;