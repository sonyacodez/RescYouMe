import React, { Component } from 'react';
import Help from './Help';
import CallPolice from './CallPolice';
import PlayRingtone from './PlayRingtone';
import SendLocationToEC from './SendLocationToEC';
import '../../styles/emergency.css'


class Emergency extends Component {
  render(){
    return(
        <div id="emergencyContainer">
          <Help id="helpComp"/>
          <div id="otherHelpButtons">
          <CallPolice id="policeComp"/>
          <PlayRingtone id="ringtoneComp"/>
          <SendLocationToEC id="locationComp"/>
          </div>
        </div>
    );
 }
}

export default Emergency;