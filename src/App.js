import React, { Component } from 'react';
// import Register from './components/Register';
// import EmergencyContacts from './components/EmergencyContacts';
import Sos from './components/Sos/Sos';
import UserProfile from './components/UserProfile'
import Emergency from './components/Emergency'


class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <div>
        {/* <Register /> */}
        {/* <EmergencyContacts /> */}
        <Sos />
        <Emergency />
        {/* <UserProfile /> */}
      </div>
    )
  }
}

export default App;
