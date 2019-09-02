import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import '../../styles/police.css'

class CallPolice extends Component {

  render(){
    return(
        <div id="policeContainer">
         <PhoneIcon id="policeIcon" />
         <Button id="policeHeader" href="tel:+972542833939">Call Police!</Button>
        </div>
    );
 }
}
export default CallPolice;