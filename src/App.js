import React, { Component } from 'react';
import Register from './components/Register/SignUp.js';
// import EmergencyContacts from './components/UserProfile';
import Sos from './components/Sos/Sos';
import UserProfile from './components/UserProfile/UserProfile'
import Emergency from './components/Emergency/Help'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Register from './components/Register';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EAC563',
      }
    }
  }
);

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
    
              <div style={{ marginLeft: '10%' }}>
                <Button><Link className="links" to="/sos">SoS</Link></Button>
                <Button><Link className="links" to="/userProfile">userProfile</Link></Button>
                <Button><Link className="links" to="/register">register</Link></Button>
                <Button><Link className="links" to="/emergency">emergency</Link></Button>
              </div>
      </AppBar>
        </MuiThemeProvider>
          <hr></hr>
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/sos" exact render={() => <Sos />} />
          <Route path="/userProfile" exact render={() => <UserProfile />} />
          <Route path="/emergency" exact render={() => <Emergency />} />      
      </Router>
    )
  }
}

export default App;
