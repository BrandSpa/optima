import React from 'react';

const Alert = React.createClass({
	getDefaultProps() {
		return {
			time: 3000
		}
	},

	getInitialState() {
		return {
			show: false
		}	
	},

	componentWillReceiveProps(props) {
		if(props.show) {
			this.show();
		}
	},
	
	show(e) {
		if(e) e.preventDefault();
		this.setState({show: true});

		setTimeout(() => {
			this.setState({show: false});
		}, this.props.time);
	},

	render() {
		const {message} = this.props;
		return (
			<div className={this.state.show ? "alert-message" : "alert-message alert-message--outside"}>
				{message}
			</div>
		)
	}
});

export default Alert;