import React, {Component} from 'react';
import Form from '../components/register/RegisterForm';

export default class Register extends Component {
	render() {
		return(
			<div className="container registerForm">
				<Form />
			</div>
		);
	}
}