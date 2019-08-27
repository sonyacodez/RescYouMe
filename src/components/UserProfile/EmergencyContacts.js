import React, {Component} from 'react'
import PhoneNumber from './PhoneNumber'
import apiClient from '../../apiClient'
import { observer, inject } from 'mobx-react';

// @inject('UserStore')
// @observer
class EmergencyContacts extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            name: "",
            phoneNumber: 0
        }
    }
    componentDidMount = async() => {
        const contacts = await apiClient.getAllContacts()
        this.setState({ contacts })
    };

    updateContactKeys = e => this.props.updateUserKeys(e);

    addNewContact = async() => {
        await apiClient.addUserContact(this.state.name, this.state.phoneNumber)
        await apiClient.getAllContacts()
    };
    render() {
        return (
            <div>
                <div id="userPhoneNumbers">
                    {this.state.contacts.map(c => <PhoneNumber contact={c}/>)}
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