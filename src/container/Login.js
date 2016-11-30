import React, {Component} from 'react';
import Form from '../components/login/LoginForm';

export default class Login extends Component {
	render() {
		return(
			<div className="container registerForm">
				<Form />
			</div>
		);
	}
}