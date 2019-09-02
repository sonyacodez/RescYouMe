import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import apiClient from '../../apiClient';
import '../../styles/signUp.css'
import Logo from "../materialComps/logo_transparent.png" 
import { Redirect } from 'react-router-dom'


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/emergency' />
        }
      }

    addUserData = async() => {
        await apiClient.addNewUser(this.state.name, this.state.email)
        this.setRedirect()
    }

    saveUserData = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <div id="signupContainer">
                <img id="logo" src={Logo} style={{}} />
                <h3 id="signUpHeader">Register</h3>
                <div id="nameContainer">
                <span id="nameHeader">Your Name: </span>
                <TextField id="nameInput" label= "name" name="name" type="text" placeholder="Type a name" onChange={this.saveUserData} />
                </div>

                <div id="emailContainer">
                <span id="emailHeader">Your Email: </span>
                <TextField id="emailInput" label= "email" name="email" type="text" placeholder="Type an email" onChange={this.saveUserData} />
                </div>

                {this.renderRedirect()}
                <Button id="registerButton" variant="contained" color="primary" onClick={this.addUserData}>Enter RescYouMe</Button>
            </div>
        );
    }
}
export default SignUp;