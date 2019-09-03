import axios from 'axios'
import UserStore from './stores/UserStore';

class ApiClient {
    constructor() {
        this.URLname = "http://localhost:4000"
        this.key = "AIzaSyATd6WHazWSaDDn4ivv2g9BHvDAeVf4xIw"
        this.currentUserID = "5d655effb9671e0a5f87ba68"
    }

    getDecodedAddress = async(lat,lng) => {
        return await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.key}`)
    };

    findUser = async(name, email) => await axios.get(`${this.URLname}/existingUser`, { name, email });

    addNewUser = async(name, email, subscriptionObject) => await axios.post(`${this.URLname}/subscribe`, { name, email, subscriptionObject });
    
    updateUser = async(subscriptionObject) => await axios.put(`${this.URLname}/updateUser/${UserStore.currentUserID}`, { subscriptionObject });

    updateUserLocation = async(latitude, longitude, address) => await axios.put(`${this.URLname}/updateUserLocation/${UserStore.currentUserID}`, { location: {latitude, longitude, address}});

    getAllContacts = async() => await axios.get(`${this.URLname}/userContacts/${UserStore.currentUserID}`);

    deleteUserContact = async(userID, contactID) => await axios.delete(`${this.URLname}/deleteUserContact/${contactID}`);

    addUserContact = async(name, phoneNumber) => await axios.post(`${this.URLname}/newUserContact/${UserStore.currentUserID}`, { name, phoneNumber });

    updateUserContactNumber = async(contactID, phoneNumber) => await axios.put(`${this.URLname}/updateUserContactNumber/${contactID}`, { phoneNumber });
}

export default new ApiClient()