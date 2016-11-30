import React, {Component} from 'react'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form role="form" class="bootstrap-modal-form" id="upload-doc" files="true" onSubmit={this.handleSubmit}>
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
          <div className="col-lg-4">
            <label for="email">Email</label>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Email" name="email" />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="password">Password</label>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Password" name="password" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label for="MiddleName">Contact Number</label>
              <input type="text" className="form-control" placeholder="Enter ContactNo" name="contact" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label for="address">Address</label>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Address" name="address" />
            </div>
          </div>
        </div>

        <input className="btn btn-success" type="submit" value="Submit" />
      </form>
    );
  }
}