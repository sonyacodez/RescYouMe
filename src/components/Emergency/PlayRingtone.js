import React, { Component } from 'react';
import VolumeDownTwoToneIcon from '@material-ui/icons/VolumeDownTwoTone';
import Button from '@material-ui/core/Button';


class PlayRingtone extends Component {
  playAudio(){
    new Audio('http://cdn.mos.musicradar.com/audio/samples/hip-hop-demo-loops/GuitarlineK02%2094D-02.mp3').play()
  };

  render(){
    return(
      <div style={{marginTop:"-94px", marginLeft:"40%"}}>
        <VolumeDownTwoToneIcon style={{color:"#5BC0BE", fontSize:"5em", marginBottom:"10px"}}/>
        <Button style={{ color:"#5BC0BE", marginLeft:"-85px", fontSize:"1em"}} onClick={this.playAudio}>Ringtone</Button>
      </div>
    )
  };
}

export default PlayRingtone;