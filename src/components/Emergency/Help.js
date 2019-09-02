import React, { Component } from 'react';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import '../../styles/Help.css'
import { alert } from "../../service"


class Help extends Component {
  render(){
    return(
      <div id="helpContainer">
        <ErrorTwoToneIcon id="helpIcon" style={{fontSize:"15em", color:"#ff3838"}} onClick = {alert}/>
        <h2 id="helpHeader">HELP</h2>
      </div>
    );
 }
}

export default Help;