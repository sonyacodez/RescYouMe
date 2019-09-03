import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import apiClient from '../../apiClient';
import { observer, inject } from 'mobx-react';
import '../../styles/signUp.css'
import Logo from "../materialComps/logo_transparent.png"
import { Redirect } from 'react-router-dom'
import { urlBase64ToUint8Array } from '../../client'

@inject('UserStore')
@observer

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }



    addUserData = async () => {

        if (!this.state.name || !this.state.email) { return alert('please fill empty fields') }

        await navigator.geolocation.getCurrentPosition(pos => {
            const coords = pos.coords
            this.props.UserStore.updateVictimLocation(coords.latitude.toFixed(6), coords.longitude.toFixed(6))
        })

        const publicVapidKey = "BJ0EZi8Bbg3qs7GFg1t9ItYQTu9XyRC2e1Goph9BabRVq6M9nFdmz--aAokvfbq9T9lkerpvTOf0Npv9hvJ4N2k";
        const register = await navigator.serviceWorker.register("/worker.js", { scope: "/" });

        const sub = {
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        }
        let endpoint
        try {
            endpoint = await register.pushManager.subscribe(sub)

        } catch (error) {
            debugger
        }
        const subscription = JSON.stringify(endpoint)
        let existingUser = await apiClient.findUser(this.state.name, this.state.email);

        if (existingUser.data) {
            this.props.UserStore.updateCurrentUserID(existingUser.data._id)
            await apiClient.updateUser(subscription)
        }

        else {
            let user = await apiClient.addNewUser(this.state.name, this.state.email, subscription)
            this.props.UserStore.updateCurrentUserID(user.data._id)
        };
        this.setRedirect()
    }

    setRedirect = () => this.setState({ redirect: true });

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/emergency' />
        }
    }

    saveUserData = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <div id="signupContainer">
                <img id="logo" src={Logo} style={{}} />
                <h3 id="signUpHeader">Register</h3>
                <div id="nameContainer">
                    <span id="nameHeader">Your Name: </span>
                    <TextField id="nameInput" label="name" name="name" type="text" placeholder="Type a name" onChange={this.saveUserData} />
                </div>

                <div id="emailContainer">
                    <span id="emailHeader">Your Email: </span>
                    <TextField id="emailInput" label="email" name="email" type="text" placeholder="Type an email" onChange={this.saveUserData} />
                </div>

                {this.renderRedirect()}
                <Button id="registerButton" variant="contained" color="primary" onClick={this.addUserData}>Enter RescYouMe</Button>
            </div>
        );
    }
}
export default SignUp;