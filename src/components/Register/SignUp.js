import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    addNewUser = () => {
        axios.post(`http://localhost:5000/addUser`, this.state)
            .then(res => {
                console.log(res.data);
            })
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