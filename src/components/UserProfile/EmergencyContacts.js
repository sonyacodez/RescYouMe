import React, {Component} from 'react'
import PhoneNumber from './PhoneNumber'
import apiClient from '../../apiClient'
import { observer, inject } from 'mobx-react';

@inject('UserStore')
@observer
class EmergencyContacts extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            name: "",
            phoneNumber: 0
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

    updateUserContactNumber = async(id, phoneNumber) => {
        await apiClient.updateUserContactNumber(id, phoneNumber)
        await this.getAllContacts()
    };

    render() {
        const contact = this.state.contacts.data
        return (
            <div>
                <div id="userPhoneNumbers">
                    {contact ? contact.map(c => 
                        <PhoneNumber key={c._id} contact={c} deleteUserContact={this.deleteUserContact} changeUserContactNumber={this.changeUserContactNumber} /> 
                    ) : null}
                </div>
                <div id="addForm">
                    <div>Name: 
                        <input name="name" value={this.state.name} onChange={this.updateContactKeys} type="text"/>
                    </div>
                    <div>Phone Number: 
                        <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateContactKeys} type="tel"/>
                    </div>
                    <button onClick={this.addNewContact}>Add New Contact</button>
                </div>
            </div>
        )
    }
}
export default EmergencyContacts