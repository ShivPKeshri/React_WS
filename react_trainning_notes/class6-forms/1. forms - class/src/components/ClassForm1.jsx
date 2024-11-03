import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ''
    };
  }

  onFirstNameChangeHandler = (event) => {
    //console.log('change')
    console.log(event.target.value);
    this.setState({
      firstName: event.target.value,
    });
  };

  onLastNameChangeHandler = (event) => {
    //console.log('change')
    console.log(event.target.value);
    this.setState({
      lastName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.state.firstName}, { this.state.lastName }</h1>
        <form>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onFirstNameChangeHandler}
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onLastNameChangeHandler}
              value={this.state.lastName}
            />
          </div>

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Header;
