import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <div className="signup-container" style={{marginTop:"50px", borderWidth:"5px", borderStyle:"groove"}}>
                <h3 style={{marginLeft:"10px"}}>Register</h3>
                <div style={{marginTop:"10px"}}>
                <span style={{marginLeft:"10px"}}>Your Name: </span>
                <TextField style={{marginTop:"-24px",marginLeft:"10px"}} label= "name" name="name" type="text" placeholder="Type a name" onChange={this.saveUserData} />
                </div>

                <div style={{marginTop:"30px"}}>
                <span style={{marginLeft:"10px"}}>Your Email: </span>
                <TextField style={{marginTop:"-24px",marginLeft:"10px"}} label= "email" name="email" type="text" placeholder="Type an email" onChange={this.saveUserData} />
                </div>

                <Button style={{marginTop:"20px", marginBottom:"10px", marginLeft:"10px"}} variant="contained" color="primary" onClick={this.addUserData}>Submit</Button>
            </div>
        );
    }
}
export default SignUp;