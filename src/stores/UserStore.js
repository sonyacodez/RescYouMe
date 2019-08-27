import { observable, computed, action } from "mobx";
import apiClient from "../apiClient"

class UserStore {
    @observable helperLocation = {
        latitude: 0,
        longitude: 0
    }
    @observable victimLocation = {
        latitude: 0,
        longitude: 0
    }

    @action updateUserKeys = e => this.setState({ [e.target.name]: e.target.value });
}

export default new UserStore()