import React, { Component } from 'react';
import VideoPlayerLayout from '../view/video-player-layout';
import PlayPause from '../view/play-pause';

class VideoPlayer extends Component {
  
  state = {
    paused: true,
  }
  
  toggleReproduction = (event) => {
    this.setState((prevState) => (
        {paused: !prevState.paused,}
      )
    )
  }
  
  render() {
    console.log(this.state.paused)
    return (
      <VideoPlayerLayout>
        <PlayPause
          handleClick={this.toggleReproduction}
          paused={this.state.paused}
        />
        <video
          controls
          autoPlay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;