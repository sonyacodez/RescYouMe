import React, { Component } from 'react';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import { alert } from "../../service"


class Help extends Component {
  render(){
    return(
      <div style={{marginTop:"60px", marginLeft:"15%"}}>
        <ErrorTwoToneIcon style={{fontSize:"15em", color:"#ff3838"}} onClick = {alert}/>
        <h2 style={{marginLeft:"90px", marginTop:"-15px"}}>HELP</h2>
      </div>
    );
 }
}

export default Help;