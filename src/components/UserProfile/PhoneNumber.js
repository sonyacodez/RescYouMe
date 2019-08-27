import React, {Component} from 'react'
import apiClient from '../../apiClient'

class PhoneNumber extends Component {
    constructor(){
        super()
        this.state = {
            phoneNumber: 0
        }
    }
    changeUserContactNumber = async () => {
        const c = this.props.contact
        await apiClient.changeUserContactNumber(c.name, c.phoneNumber)
        await apiClient.getAllContacts()
    };
    render() {
        const c = this.props.contact
        return (
            <div>
                Hi, I'm the phone number component.
                <span>{c.name}</span>
                <span>{c.phoneNumber}</span>
            </div>
        )
    }
}
export default PhoneNumber