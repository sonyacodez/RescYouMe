import React, { Component } from 'react';
import Help from './Help';
import CallPolice from './CallPolice';
import PlayRingtone from './PlayRingtone';

class Emergency extends Component {
  render(){
    return(
        <div>
          <Help />
          <CallPolice />
          <PlayRingtone />
        </div>
    );
 }
}

export default Emergency;