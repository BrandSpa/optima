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
		return (
				<div className="my-tooltip" style={this.state.show ? {display: 'block', position: 'absolute', 'right': '-225px', 'top': 0} : {display: 'none'}}>
					{this.props.children}
				</div>
		)
	}
});


export default Tooltip;