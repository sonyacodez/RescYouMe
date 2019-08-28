import React, { Component } from 'react';


class PlayRingtone extends Component {
playAudio(){
new Audio('http://cdn.mos.musicradar.com/audio/samples/hip-hop-demo-loops/GuitarlineK02%2094D-02.mp3').play()
}

  render(){
    return(
        <div>
         <button onClick={this.playAudio}>play audio</button>
        </div>
    );
 }
}

export default PlayRingtone;