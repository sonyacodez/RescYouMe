import axios from 'axios'
import React, {Component} from 'react'



class ApiClient extends Component {
    constructor() {
        super()
        this.state = {
            key: "AIzaSyATd6WHazWSaDDn4ivv2g9BHvDAeVf4xIw"

        }
    }
    getDecodedAddress = async (lat,lng) => {
       let data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.state.key}`)
        return  data;
};
}
export default new ApiClient()