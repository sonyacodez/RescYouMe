import React, { Component } from 'react';
import Help from './Help';
import CallPolice from './CallPolice';
import PlayRingtone from './PlayRingtone';
import SendLocationToEC from './SendLocationToEC';

class Emergency extends Component {
  render(){
    return(
        <div>
          <Help />
          <CallPolice />
          <PlayRingtone />
          <SendLocationToEC />
        </div>
    );
 }
}

export default Emergency;