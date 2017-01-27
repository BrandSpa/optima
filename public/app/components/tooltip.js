import React from 'react';
import ReactDOM from 'react-dom';

const Tooltip = React.createClass({
	getInitialState() {
		return {
			show: false
		}
	},

	componentDidMount() {
				const tooltip = ReactDOM.findDOMNode(this);
	},
	
	componentWillReceiveProps(props) {
		this.setState({show: props.show});
	},

	render() {
		let showStyle = {
			display: 'block', 
			position: 'absolute', 
			right: '-200px', 
			top: 0
		};

		let hideStyle = {display: 'none'};

		return (
				<div 
					className={this.state.show ? "my-tooltip my-tooltip--active" : "my-tooltip" }
					style={this.state.show ? showStyle : hideStyle}
				>
					{this.props.children}
				</div>
		)
	}
});


export default Tooltip;