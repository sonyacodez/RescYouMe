import React, {Component} from 'react'
import apiClient from '../../apiClient'

class PhoneNumber extends Component {
    constructor(){
        super()
        this.state = { phoneNumber: 0 }
    }
    changeUserContactNumber = async() => {
        const c = this.props.contact
        await apiClient.changeUserContactNumber(c.name, c.phoneNumber)
        await apiClient.getAllContacts()
    };
    deleteUserContact = async() => {
        return await this.props.deleteUserContact(this.props.contact._id)
    }
    render() {
        const c = this.props.contact
        return (
            <div>
                <button onClick={this.deleteUserContact}><strong>X</strong></button>
                <span><strong> {c.name}: </strong></span>
                <span>{c.phoneNumber}</span>
            </div>
        )
    }
}
export default PhoneNumber