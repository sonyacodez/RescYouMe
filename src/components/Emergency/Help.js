import React, { Component } from 'react';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';

class Help extends Component {
  displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          icon: 'images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };
        reg.showNotification('Hello world!', options);
      });
    }
  }
  render(){
    return(
      <div style={{marginTop:"60px", marginLeft:"15%"}}>
        <ErrorTwoToneIcon style={{fontSize:"15em", color:"#ff3838"}} onClick = {this.displayNotification}/>
        <h2 style={{marginLeft:"90px", marginTop:"-15px"}}>HELP</h2>
      </div>
    );
 }
}

export default Help;