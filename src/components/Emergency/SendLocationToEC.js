/* eslint-disable no-unused-expressions */
import React, {Component} from 'react'
import apiClient from '../../apiClient'
import { inject } from 'mobx-react';

@inject("UserStore")
class SendLocationToEC extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            address: "",
            currentLocation: {
                latitude: 0,
                longitude: 0
            }
        }
    }
    componentDidMount = async() => await this.sendTextToUserContacts();

    sendTextToUserContacts = async() => {
        await navigator.geolocation.getCurrentPosition(pos => {
            const coords = pos.coords
            this.setState({ 
                currentLocation: { 
                    latitude: coords.latitude, 
                    longitude: coords.longitude 
                }
            })
            this.updateAddress()
        })
        await this.getAllContacts()
    };

    updateAddress = async () => {
        const state = this.state.currentLocation
        let data =  await apiClient.getDecodedAddress(state.latitude, state.longitude)
        let address = data.data.results[0].formatted_address
        this.setState({ address })
    };

    getAllContacts = async() => {
        const contactsInfo = await apiClient.getAllContacts()
        const contacts = contactsInfo.data
        this.setState({ contacts })
    };

    cleanPhoneNumbers = () => {
        const contacts = this.state.contacts
        return contacts.map(c => c.phoneNumber).map(c => c.slice(1, c.length)).map(c => `+972${c}`)
    }

    render() {
        const userName = this.props.UserStore.currentUser.name
        let contactNumbers = this.cleanPhoneNumbers()
        const cleanNumbers = contactNumbers.join(",")
        const sms = `sms:+972542833939?body=Your friend, ${userName}, is feeling unsafe. ${userName} is located at ${this.state.address}`
        return (
            <div>
                {this.state.address ? <button><a href={sms}>Send Location to Emergency Contacts</a></button> : null}
            </div>
        )
    }
}
export default SendLocationToEC