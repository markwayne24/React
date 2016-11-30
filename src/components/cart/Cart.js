import React, { Component } from 'react';

export default class Cart extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			  <div className="modal-dialog modal-lg" role="document">
			    <div className="modal-content">
			      <form role="form" class="bootstrap-modal-form" id="upload-doc" files="true">
			      	<div className="modal-header bg-primary">
	                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	                    <h4 className="modal-title" id="myModalLabel">MY CART</h4>
	                    <p className="pull-left">Subtotal: P {parseFloat((this.props.total).replace(/\s/g, "").replace(",", "."))}</p>
                	</div>
                	<div className="modal-body">
                		<div className="row">
                			<div className="col-lg-5">
                				<label for="firstname">First Name</label>
	                			<div className="form-group">
	                				<input type="text" className="form-control" placeholder="Enter Firstname" name="firstname" />
                				</div>
                			</div>
                			<div className="col-lg-3">
	                			<div className="form-group">
	                				<label for="MiddleName">Middle Name</label>
	                				<input type="text" className="form-control" placeholder="Enter Middlename" name="middlename" />
                				</div>
                			</div>
                			<div className="col-lg-4">
	                			<div className="form-group">
	                				<label for="firstname">Last Name</label>
	                				<input type="text" className="form-control" placeholder="Enter Lastname" name="lastname" />
                				</div>
                			</div>
                		</div>
                		<div className="row">
                			<input type="button" className="btn btn-primary pull-right" value="Proceed to payment"/>
                		</div>
                	</div>
			      </form>
			    </div>
			  </div>
			</div>
		);
	}
}