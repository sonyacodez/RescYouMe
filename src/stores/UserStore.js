/* eslint-disable no-unused-expressions */
import { observable, action, computed } from "mobx";
import EmergencyContactStore from "./EmergencyContact"

class UserStore {
    @observable contactList = []

    @computed get numContacts() { return this.contactList.length };

    @action addContact = (name, phoneNumber) => {
        this.contactList.push( new EmergencyContactStore(name, phoneNumber) )
        // apiClient.methodtoadduser(name, phoneNumber)
    }
    @action changeContactNumber = (name, phoneNumber) => this.contactList.find( c => c.name === name ).phoneNumber = phoneNumber;

    @action deleteContact = (name) => {
        const index = this.contactList.findIndex(c => c.name === name)
        this.contactList.splice(index, 1)
    };
}

export default new UserStore()