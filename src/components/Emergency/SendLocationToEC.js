import React, {Component} from 'react'
import apiClient from '../../apiClient'

class SendLocationToEC extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            currentLocation: {
                latitude: 0,
                longitude: 0,
                address: ""
            }
        }
    }
    findUserLocation = async() => {
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
        this.state.contacts.forEach(c => console.log(c.phoneNumber))
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

    // Sends Text Message - to user’s emergency contact numbers. 

    render() {
        return (
            <div>
                <button onClick={this.findUserLocation}>Send Location to Emergency Contacts</button>
            </div>
        )
    }
}
export default SendLocationToEC