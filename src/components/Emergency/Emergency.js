import React, { Component } from 'react';
import CallPolice from './CallPolice';
import PlayRingtone from './PlayRingtone';
import Help from './Help';


class Emergency extends Component {
  render(){
    return(
        <div>
          <CallPolice />
          <PlayRingtone />
          <Help />
        </div>
    );
 }
}

export default Emergency;