import { observable, action } from "mobx";

class UserStore {
    @observable currentUser =  ""
    @observable currentUserID = ""
    @observable helperLocation = {
        latitude: 0,
        longitude: 0
    }
    @observable victimLocation = {
        latitude: 0,
        longitude: 0
    }

    @action updateUserKeys = e => this.setState({ [e.target.name]: e.target.value });
    
    @action updateCurrentUserID = (_userID) => this.currentUserID = _userID 


}

export default new UserStore()