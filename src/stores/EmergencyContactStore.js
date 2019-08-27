import { observable } from "mobx";

export class EmergencyContactStore {
    @observable name
    @observable phoneNumber
    constructor(name, phoneNumber){
        this.name = name
        this.phoneNumber = phoneNumber
    }
}