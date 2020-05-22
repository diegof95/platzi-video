import React, { Component } from 'react';
import VideoPlayerLayout from '../view/video-player-layout';
import Video from '../view/video';
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
  
  componentDidMount() {
    if(this.props.autoplay) {
      this.setState({ paused: false})
    }
  }
  
  render() {
    return (
      <VideoPlayerLayout>
        <PlayPause
          handleClick={this.toggleReproduction}
          paused={this.state.paused}
        />
        <Video
          autoplay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          paused={this.state.paused}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;