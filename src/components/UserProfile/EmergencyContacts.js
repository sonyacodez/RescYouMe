import React, {Component} from 'react'
import PhoneNumber from './PhoneNumber'

class EmergencyContacts extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            phoneNumber: 0
        }
    }
    render() {
        return (
            <div>
                <div id="userPhoneNumbers">
                    <PhoneNumber />
                </div>
                <div id="addForm">
                    <div>Name: 
                        <input name="firstName" value={this.state.name} onChange={this.updateClientKeys} type="text"/>
                    </div>
                    <div>Phone Number: 
                        <input name="owner" value={this.state.phoneNumber} onChange={this.updateClientKeys} type="text"/>
                    </div>
                    <button onClick={this.addNewContact}>Add New Client</button>
                </div>
            </div>
        )
    }
}
export default EmergencyContacts