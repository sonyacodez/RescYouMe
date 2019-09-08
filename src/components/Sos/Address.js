/* eslint-disable no-unused-expressions */
import React, {Component} from 'react'
// import ApiClient from '../../apiClient'


class Address extends Component {
    constructor(){
        super()
        this.state={
          // lat:"",
          // lng:"",
          // userAddress: "",
          victimAddress: ""
        }
    }

    componentDidMount() {
      this.props.address ? this.setState({ victimAddress: this.props.address }) : null
      // navigator.geolocation.getCurrentPosition(pos => {
      //   const coords = pos.coords;
      //   this.setState({
      //       lat:coords.latitude,
      //       lng:coords.longitude
      //   });
      //   this.GetAddress();
      // });
    }

    // GetAddress = async () => {
    //   let data =  await ApiClient.getDecodedAddress(this.state.lat, this.state.lng)
    //   let userAddress = data.data.results[0].formatted_address
    //   this.setState({ userAddress })
    // }

    render() {
      return (
        <div style={{marginLeft:"20%", marginTop:"5%"}}>
            {this.state.victimAddress ? <span style={{marginLeft:"6%"}}>DISTRESS CALL FROM {this.state.victimAddress}</span> : null}
        </div>
      )
    }
}
export default Address