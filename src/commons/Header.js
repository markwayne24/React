import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Header extends Component {
	render() {
		return(
			<header>
				<nav className="navbar navbar-default" data-spy="affix" data-offset-top="2">
					<div  id="mainNav">
					    <div className="container-fluid">
					        <div className="navbar-header">
					            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					                <span className="icon-bar"></span>
					                <span className="icon-bar"></span>
					                <span className="icon-bar"></span>
					            </button>
								<button type="button" className="btn btn-success button-view" data-toggle="modal" data-target=".bs-example-modal-lg">View Cart</button>
					        </div>
					        <div>
					            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
					                <ul className="nav navbar-nav">
					                    <li><Link to="/">Home</Link></li>
					                    <li><Link to="register">Register</Link></li>
					                    <li><Link to="login">Login</Link></li>
					                </ul>
					            </div>
					        </div>
					    </div>
					</div>
				</nav>
			</header>
		);
	}
}