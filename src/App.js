import React, { Component } from 'react';
import Register from './components/Register/SignUp.js';
// import EmergencyContacts from './components/UserProfile';
import Sos from './components/Sos/Sos';
import UserProfile from './components/UserProfile/UserProfile'
import Emergency from './components/Emergency/Emergency'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Register from './components/Register';
import Help from './components/Emergency/Help'

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
      <div style={{marginLeft:'14%'}}>
      <Link to="/sos"><button className="links">SoS</button></Link>
      <Link to="/userProfile"><button className="links">userProfile</button></Link>
      <Link to="/register"><button className="links">register</button></Link>
      <Link to="/emergency"><button className="links">emergency</button></Link>
      <Link to="/help"><button className="links">help</button></Link>

      </div>
      <hr></hr>
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/sos" exact render={() => <Sos />} />
      <Route path="/userProfile" exact render={() => <UserProfile />} />
      <Route path="/emergency" exact render={() => <Emergency />} />
      <Route path="/help" exact render={() => <Help />} />
      </div>
      </Router>
    )
  }
}

export default App;
