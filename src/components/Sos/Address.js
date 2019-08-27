import React, {Component} from 'react'
import ApiClient from '../../apiClient'


class Address extends Component {
    constructor(){
        super()
        this.state={
          lat:"",
          lng:"",
          Address: ""
        }
    }

    componentDidMount() {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              this.setState({
                  lat:coords.latitude,
                  lng:coords.longitude
                
              });
              this.GetAddress();
            });
          }
        
    
    

    GetAddress = async () => {
        let data =  await ApiClient.getDecodedAddress(this.state.lat, this.state.lng)
        let address = data.data.results[0].formatted_address
        this.setState({
        Address: address
        })
    }


    render() {
        return (
              <div>
                 <span>distress call at:</span><br></br>
                 {this.state.Address}
              </div>
        )
    }
}
export default Address