import React, { Component } from 'react';
import VideoPlayerLayout from '../view/video-player-layout';
import Video from '../view/video';
import VideoControls from '../view/video-controls';
import ProgressBar from '../view/progress-bar';
import PlayPause from '../view/play-pause';
import TimeInfo from '../view/time-info';
import Spinner from '../view/spinner';

class VideoPlayer extends Component {
  
  state = {
    paused: true,
    loading: false,
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
  
  handleTimeUpdate = (event) => {
    this.setState(
      {currentTime: this.video.currentTime}
    )
  }
  
  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
    this.setState(
      {currentTime: this.video.currentTime}
    )
  }
  
  handleTimeSeeking = (event) => {
    this.setState((prevState) => (
        {loading: !prevState.loading}
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
        { this.state.loading &&
        <Spinner active={this.state.loading}/>
        }
        <Video
          autoplay={this.props.autoplay}
          src="https://dev-files-provider.s3.us-east-2.amazonaws.com/wolves_hauling.mp4"
          paused={this.state.paused}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleTimeSeeking={this.handleTimeSeeking}
          toggleReproduction={this.toggleReproduction}
        />
        <VideoControls>
          <TimeInfo current={this.state.currentTime} duration={this.state.duration}/>
          <ProgressBar
            actual={this.state.currentTime}
            total={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
        </VideoControls>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;