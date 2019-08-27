import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    addUserData = async () => {
        let result = await axios.post(`http://localhost:5000/user`,this.state)
        console.log(result)
    }

    saveUserData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="signup-container">
                <input name="name" type="text" placeholder="Type a name" onChange={this.saveUserData}></input>
                <input name="email" type="text" placeholder="Type an email" onChange={this.saveUserData}></input>
                <button onClick={this.addUserData}>Submit</button>
            </div>
        );
    }
}
export default SignUp;