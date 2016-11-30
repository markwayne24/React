import React, { Component } from 'react';

export default class Items extends Component {
	constructor(props){
		super(props);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}
	handleAddToCart(event) {
		localStorage.setItem('totalAmount', Number(parseFloat(this.props.price.replace(/,/g, ''))) + Number(parseFloat(this.props.total.replace(/,/g, ''))));
		alert("successfully added to cart");
	}

	render() {
		return(
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src={this.props.avatarUrl} alt={this.props.name} style={{ height:'200px', width:'200px'}} />
			      <center>
			      	  <p className="glyphicon glyphicon-star" style={{color:'#FF8C00'}}></p>
			      	  <p className="glyphicon glyphicon-star" style={{color:'#FF8C00'}}></p>
			      	  <p className="glyphicon glyphicon-star" style={{color:'#FF8C00'}}></p>
			      	  <p className="glyphicon glyphicon-star" style={{color:'#FF8C00'}}></p>
			      	  <p className="glyphicon glyphicon-star-empty"></p>
				      <div className="caption">
				        <h3>{ this.props.name }</h3>
				        <h4>P { (this.props.price) }.00</h4>
				        <p><button type="button" className="btn btn-success" onClick={this.handleAddToCart}>Add to cart</button></p>
				      </div>
			      </center>
			    </div>
			  </div>			
		);
	}
}