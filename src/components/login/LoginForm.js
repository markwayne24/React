import React, {Component} from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form role="form" class="bootstrap-modal-form" id="upload-doc" files="true" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <label for="email">Email</label>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Email" name="email" />
            </div>
          </div>
          <div className="col-lg-3" />
        </div>
        <div className="row">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="form-group">
              <label for="Password">Password</label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password" />
            </div>
          </div>
          <div className="col-lg-3" />
        </div>
        <div className="row">
        <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="form-group">
                <input className="btn btn-success" style={{width:'100%'}} type="submit" value="Submit" />
            </div>
          </div>
          <div className="col-lg-3" />
            
        </div>
      </form>
    );
  }
}