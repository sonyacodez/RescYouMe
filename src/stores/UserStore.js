import { observable, action } from "mobx";

class UserStore {
    @observable currentUser = { name: "Sonya" }
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