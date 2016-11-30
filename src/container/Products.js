import React, { Component } from 'react';

import Items from '../components/product/Items';
import ViewCart from '../components/cart/Cart';

export default class Products extends Component {
	constructor(props){
      super(props);
      this.state = { 
        totalAmount: ''}
      localStorage.setItem('totalAmount', 0);
    }
    componentDidMount() {
      this.totalAmount = setInterval(
        () => this.tick(),
        100
      );
      console.log('DidMount');
    }

    componentWillUnmount() {
      clearInterval(this.totalAmount);
      console.log('Unmount');
    }


    tick() {
      this.setState({totalAmount: localStorage.getItem('totalAmount')});
    }
	render() {
		const Item = {
	      laptop: {
	        name: 'Apple',
	        price: '61,200',
	        avatarUrl: 'http://www.lapntab.com/Apple/4.jpg'},
	      tablet: {
	        name: 'Wave',
	        price: '32,000',
	        avatarUrl: 'http://ptcomputers.org/wp-content/uploads/2014/03/iPad-VS-Android-Tablet-PC-300x300.jpg'},
	      celphone: {
	        name: 'Samsung note 3',
	        price: '31,000',
	        avatarUrl: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/ATT-Samsung-Galaxy-Note-3-Front-200x200.jpg'}
    	}
		return (
			<div className="container" style={{marginTop:'30px'}}>
			   <ViewCart total={this.state.totalAmount} />
		       <div className="row">
			       <Items
				        name={ Item.laptop.name }
		          		price={ Item.laptop.price }
		          		avatarUrl={ Item.laptop.avatarUrl}
		          		total={this.state.totalAmount}/>
		          	<Items
				        name={ Item.tablet.name }
		          		price={ Item.tablet.price }
		          		avatarUrl={ Item.tablet.avatarUrl}
		          		total={this.state.totalAmount}/>
	          		<Items
				        name={ Item.celphone.name }
		          		price={ Item.celphone.price }
		          		avatarUrl={ Item.celphone.avatarUrl}
		          		total={this.state.totalAmount}/>
		          	<Items
				        name={ Item.laptop.name }
		          		price={ Item.laptop.price }
		          		avatarUrl={ Item.laptop.avatarUrl}
		          		total={this.state.totalAmount}/>
		          	<Items
				        name={ Item.tablet.name }
		          		price={ Item.tablet.price }
		          		avatarUrl={ Item.tablet.avatarUrl}
		          		total={this.state.totalAmount}/>
	          		<Items
				        name={ Item.celphone.name }
		          		price={ Item.celphone.price }
		          		avatarUrl={ Item.celphone.avatarUrl}
		          		total={this.state.totalAmount}/>
		          			          	<Items
				        name={ Item.laptop.name }
		          		price={ Item.laptop.price }
		          		avatarUrl={ Item.laptop.avatarUrl}
		          		total={this.state.totalAmount}/>
		          	<Items
				        name={ Item.tablet.name }
		          		price={ Item.tablet.price }
		          		avatarUrl={ Item.tablet.avatarUrl}
		          		total={this.state.totalAmount}/>
	          		<Items
				        name={ Item.celphone.name }
		          		price={ Item.celphone.price }
		          		avatarUrl={ Item.celphone.avatarUrl}
		          		total={this.state.totalAmount}/>
		        </div>
	    	</div>
	    )
	}
	
}



