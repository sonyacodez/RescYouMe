import React, { Component } from 'react';
import VolumeDownTwoToneIcon from '@material-ui/icons/VolumeDownTwoTone';
import Button from '@material-ui/core/Button';
import '../../styles/PlayRingtone.css'

class PlayRingtone extends Component {
playAudio(){
new Audio('http://cdn.mos.musicradar.com/audio/samples/hip-hop-demo-loops/GuitarlineK02%2094D-02.mp3').play()
}

  render(){
    return(
        <div id="playRingtoneContainer">
        <VolumeDownTwoToneIcon id="playRingtoneIcon"/>
         <Button id="playRingtoneHeader" onClick={this.playAudio}>Ringtone</Button>
        </div>
    );
 }
}

export default PlayRingtone;