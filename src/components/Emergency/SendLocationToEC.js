import React, {Component} from 'react'
import apiClient from '../../apiClient'

class SendLocationToEC extends Component {
    constructor(){
        super()
        this.state = {
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
            this.getAddress()
        })
    }
    getAddress = async () => {
        const state = this.state.currentLocation
        let data =  await apiClient.getDecodedAddress(state.latitude, state.longitude)
        let address = data.data.results[0].formatted_address
        this.setState({ address })
    }

    // Sends to server get request to DB for user’s emergency contact numbers.

    render() {
        return (
            <div>
                <button onClick={this.findUserLocation}>Send Location to Emergency Contacts</button>
            </div>
        )
    }
}
export default SendLocationToEC