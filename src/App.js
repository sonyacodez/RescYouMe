import React, { Component } from 'react';
import Register from './components/Register/SignUp.js';
// import EmergencyContacts from './components/UserProfile';
import Sos from './components/Sos/Sos';
import UserProfile from './components/UserProfile/UserProfile'
import Emergency from './components/Emergency/Emergency'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Register from './components/Register';
import '../src/styles/style.css'
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ButtonAppBar from './components/materialComps/appBar'
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom'


const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EAC563',
      }
    }
  }
);
@inject('UserStore')
@observer
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        {this.props.UserStore.currentUserID ?<ButtonAppBar /> : null}
        <MuiThemeProvider theme={theme}>
          <AppBar position="static"></AppBar>
        </MuiThemeProvider>
        <Route path="/" exact render={() => <Register />} />
        {this.props.UserStore.currentUserID ? <Route path="/sos" exact render={() => <Sos />} />: <Redirect to='/' />}
        {this.props.UserStore.currentUserID ?  <Route path="/userProfile" exact render={() => <UserProfile />} />: <Redirect to='/' />}
        {this.props.UserStore.currentUserID ?  <Route path="/emergency" exact render={() => <Emergency />} /> : <Redirect to='/' />}
      </Router>
    )
  }
}

export default App;
