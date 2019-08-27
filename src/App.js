import React, { Component } from 'react';
// import Register from './components/Register';
// import EmergencyContacts from './components/EmergencyContacts';
import Sos from './components/Sos/Sos';
import UserProfile from './components/UserProfile/UserProfile'
import Emergency from './components/Emergency/Emergency'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from './components/Register';


class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <Router>
      <div>
      <Link to="/sos"><button className="links">SoS</button></Link>
      <Link to="/userProfile"><button className="links">userProfile</button></Link>
      <Link to="/register"><button className="links">register</button></Link>
      <Link to="/emergency"><button className="links">emergency</button></Link>


      <Route path="/register" exact render={() => <Register />} />
      <Route path="/sos" exact render={() => <Sos />} />
      <Route path="/userProfile" exact render={() => <UserProfile />} />
      <Route path="/emergency" exact render={() => <Emergency />} />

      </div>
      </Router>
    )
  }
}

export default App;
