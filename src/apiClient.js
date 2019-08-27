import axios from 'axios'

class ApiClient {
    constructor() {
        this.URLname = "http://localhost:4000"
        this.key = "AIzaSyATd6WHazWSaDDn4ivv2g9BHvDAeVf4xIw"
    }
    getDecodedAddress = async (lat,lng) => {
        let data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.key}`)
        return  data;
    };
    getAllContacts = async () => await axios.get(`${this.URLname}/userContacts`);

    deleteUserContact = async(name) => {
        return await axios.delete(`${this.URLname}/deleteUserContact/${name}`)
    }
    addUserContact = async (name, phoneNumber) => {
        return await axios.post(`${this.URLname}/newUserContact`, { name, phoneNumber })
    };
    changeUserContactNumber = async (name, phoneNumber) => {
        return await axios.put(`${this.URLname}/changeUserContactNumber/${name}`, { phoneNumber })
    };
}

export default new ApiClient()