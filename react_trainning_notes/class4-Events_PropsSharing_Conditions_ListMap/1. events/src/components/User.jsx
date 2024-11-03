import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Guest",
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // onClickHandler(){
  //     console.log(this)
  //     this.setState({
  //         firstName: 'John'
  //     })
  // }

  onClickHandler = () => {
    console.log(this);
    this.setState({
      firstName: "John",
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.state.firstName}</h1>
        {/* 1st way */}
        {/* <button onClick={ this.onClickHandler.bind(this) }>Update</button> */}

        {/* 2nd way */}
        {/* <button onClick={ this.onClickHandler }>Update</button> */}

        {/* 3rd way */}
        {/* <button onClick={ () => this.onClickHandler() }>Update</button> */}

        {/* 4th way */}
        <button onClick={this.onClickHandler}>Update</button>
      </div>
    );
  }
}
export default User;
