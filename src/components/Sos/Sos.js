import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import Address from './Address'
import apiClient from '../../apiClient'

export class Sos extends Component {
  constructor(){
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      victimLat: 0,
      victimLng: 0,
      doesVictimExist: false
    }
  }

  onMarkerClick = (props, marker) => {
    this.setState({ 
      selectedPlace: props, 
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
  
  onClose = () => {
    if(this.state.showingInfoWindow){
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  };

  componentWillMount = async() => {
    const address = this.props.match.params.address
    if(address){
      const coordinatesObject = await apiClient.getLatLongOfAddress(address)
      const coordinates = coordinatesObject.data.results[0].geometry.location
      this.setState({ victimLat: coordinates.lat, victimLng: coordinates.lng, doesVictimExist: true })
    }
  }

  render() {
    return (
      <div>
        <div>
          <CurrentLocation address={this.props.match.params.address ? this.props.match.params.address : null} centerAroundCurrentLocation google={this.props.google}>
            <Marker onClick={this.onMarkerClick} name={`Your Current Location`} />
            {this.state.doesVictimExist ? <Marker position={{ lat: this.state.victimLat, lng: this.state.victimLng}} onClick={this.onMarkerClick} name={`${this.props.match.params.name}'s Current Location`}/> : null}
            <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>
        <div>
          <Address address={this.props.match.params.address ? this.props.match.params.address : null}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7bTH7gOg_LUILwwIFYuXSiCwDR1beic8'
})(Sos);