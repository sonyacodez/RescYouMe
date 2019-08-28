import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';

class CallPolice extends Component {

  render(){
    return(
        <div style={{marginTop:"60px", marginLeft:"10%"}}>
         <PhoneIcon style={{fontSize:"4em", marginBottom:"10px"}}/>
         <a style={{ marginLeft:"-60px", color:"black", textDecorationLine:"none"}} href="tel:+972542833939">Call Police!</a>
        </div>
    );
 }
}
export default CallPolice;