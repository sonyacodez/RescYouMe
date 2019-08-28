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
    getAllContacts = async () => await axios.get(`${this.URLname}/userContacts/5d655effb9671e0a5f87ba68`);

    deleteUserContact = async(contactID) => {
        return await axios.delete(`${this.URLname}/deleteUserContact/${contactID}`)
    }
    addUserContact = async (name, phoneNumber) => {
        return await axios.post(`${this.URLname}/newUserContact/5d655effb9671e0a5f87ba68`, { name, phoneNumber })
    };
    updateUserContactNumber = async (contactID, phoneNumber) => {
        return await axios.put(`${this.URLname}/updateUserContactNumber/${contactID}`, { phoneNumber })
    };
}

export default new ApiClient()