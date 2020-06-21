import React, { Component } from 'react';
import VideoPlayerLayout from '../view/video-player-layout';
import Video from '../view/video';
import PlayPause from '../view/play-pause';
import TimeInfo from '../view/time-info';

class VideoPlayer extends Component {
  
  state = {
    paused: true,
    currentTime: 0,
    duration: 0,
  }
  
  toggleReproduction = (event) => {
    this.setState((prevState) => (
        {paused: !prevState.paused,}
      )
    )
  }
  
  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState(
      {duration: this.video.duration}
    )
  }
  
  handleTimeupdate = (event) => {
    this.setState(
      {currentTime: this.video.currentTime}
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
          src="https://dev-files-provider.s3.us-east-2.amazonaws.com/wolves_hauling.mp4"
          paused={this.state.paused}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeupdate={this.handleTimeupdate}
          toggleReproduction={this.toggleReproduction}
        />
        <TimeInfo current={this.state.currentTime} duration={this.state.duration}/>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;