import React from 'react';
import request from 'axios';
import page from 'page';

const Alert = React.createClass({
	getDefaultProps() {
		return {
			time: 3000
		}
	},

	getInitialState() {
		return {
			email: '',
			password: ''
		}	
	},

	login(e) {
		e.preventDefault();
		console.log(this.state);
		request
		.post('/login', this.state)
		.then(res => {
			localStorage.setItem('optima-token', res.data.token);
			page.redirect('/');
		});
	},

	handleChange(field, e) {
		this.setState({...this.state, [field]: e.currentTarget.value});
	},

	render() {
		return (
			<div className="container">
					<form onSubmit={this.login} className="form-signin col-md-6" style={{margin: 'auto', float: 'none',background: '#fff', padding: '40px'}}>
						<div className="form-group">
							<input 
								type="text" 
								name="email"
								className="form-control" 
								placeholder="Email"
								onChange={this.handleChange.bind(null, 'email')}
							/>
						</div>

						<div className="form-group">
							<input 
								type="password" 
								name="password"
								className="form-control" 
								placeholder="Contraseña" 
								onChange={this.handleChange.bind(null, 'password')}
							/>
						</div>

					<button 
						className="btn btn-lg btn-warning btn-block" 
						type="submit"
						onClick={this.login}
					>
					Ingresar
					</button>
				</form>
			</div>
		)
	}
});

export default Alert;