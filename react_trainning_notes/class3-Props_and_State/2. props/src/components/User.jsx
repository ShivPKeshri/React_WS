import React, { Component } from 'react';

class User extends Component {
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Name: { this.props.name }</h1>
            </div>
        )
    }
}
export default User;