import React, {Component} from 'react'
import PhoneNumber from './PhoneNumber'
import apiClient from '../../apiClient'
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


@inject('UserStore')
@observer
class EmergencyContacts extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            name: "",
            phoneNumber: ""
        }
    }

    getAllContacts = async() => {
        const contacts = await apiClient.getAllContacts()
        this.setState({ contacts })
    };

    componentDidMount = async() => await this.getAllContacts();

    updateContactKeys = e => this.setState({ [e.target.name]: e.target.value });

    addNewContact = async() => {
        await apiClient.addUserContact(this.state.name, this.state.phoneNumber)
        await this.getAllContacts()
    };
    
    deleteUserContact = async(id) => {
        await apiClient.deleteUserContact(id)
        await this.getAllContacts();
    };

    changeUserContactNumber = async(id, phoneNumber) => {
        await apiClient.changeUserContactNumber(id, phoneNumber)
        await this.getAllContacts()
    };

    render() {
        const contact = this.state.contacts.data
        return (
            <div>
                <div id="userPhoneNumbers" style={{marginTop:"20px"}}>
                    {contact ? contact.map(c => 
                        <PhoneNumber key={c._id} contact={c} deleteUserContact={this.deleteUserContact} changeUserContactNumber={this.changeUserContactNumber} /> 
                    ) : null}
                </div>

                <div  id="addForm" style={{marginTop:"50px", borderWidth:"5px", borderStyle:"groove"}}>
                    <h3 style={{marginLeft:"10px"}}>Add Emergency Contact</h3>
                 
                    <div> 
                        <span style={{marginLeft:"10px"}}>Name:</span>
                            <TextField style={{marginTop:"-24px",marginLeft:"10px"}}  label="name" name="name" value={this.state.name} onChange={this.updateContactKeys} type="text"/>
                    </div>
                
                    <div style={{marginTop:"30px"}}>
                        <span style={{marginLeft:"10px"}}>Phone Number: </span>
                            <TextField style={{marginTop:"-24px",marginLeft:"10px"}}  label="Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateContactKeys} type="text"/>
                    </div>
               
                    <Button style={{marginTop:"20px", marginBottom:"10px", marginLeft:"10px"}} variant="contained" color="primary" onClick={this.addNewContact}>Add New Contact</Button>
                </div>
            </div>
        )
    }
}
export default EmergencyContacts