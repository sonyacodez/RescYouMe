import React, { Component } from 'react';
import CallPolice from './CallPolice';
import PlayRingtone from './PlayRingtone';

class Emergency extends Component {
  render(){
    return(
        <div>
          <CallPolice />
          <PlayRingtone />
        </div>
    );
 }
}

export default Emergency;