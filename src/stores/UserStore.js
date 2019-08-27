/* eslint-disable no-unused-expressions */
import { observable, computed } from "mobx";
import apiClient from "../apiClient"

class UserStore {
    @observable userLocation = {
        latitude: 0,
        longitude: 0
    }
    @observable contactList = apiClient.getAllContacts()

    @computed get numContacts() { return this.contactList.length };
}

export default new UserStore()