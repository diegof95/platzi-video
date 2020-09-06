import React, { Component } from 'react';
import VideoPlayerLayout from '../view/video-player-layout';
import Video from '../view/video';
import Title from '../view/title';
import VideoControls from '../view/video-controls';
import ProgressBar from '../view/progress-bar';
import PlayPause from '../view/play-pause';
import TimeInfo from '../view/time-info';
import Spinner from '../view/spinner';
import VolumeControl from '../view/volume';
import FullScreen from '../view/full-screen';

class VideoPlayer extends Component {
  
  state = {
    paused: false,
    loading: false,
    currentTime: 0,
    duration: 0,
    currentVolume: 1,
    muted: false
  }
  
  toggleReproduction = (event) => {
    this.setState((prevState) => (
        {paused: !prevState.paused}
      )
    );
  }
  
  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState(
      {duration: this.video.duration}
    );
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
    );
  }
  
  handleTimeSeeking = (event) => {
    this.setState(
      {loading: true}
    );
  }
  handleTimeSeeked = (event) => {
    this.setState(
      {loading: false}
    );
  }
  
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
    this.setState(
      {currentVolume: this.video.volume}
    );
  }

  handleMute = (event) => {
    if(this.state.muted){
      this.video.volume = this.state.currentVolume;
      this.setState({muted: false});
    }else{
      this.video.volume = 0;
      this.setState({muted: true});
    }
  }

  handleFullScreen = (event) => {
    if(!document.fullscreenElement){
      this.player.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  }

  componentDidMount() {
    if(this.props.autoplay) {
      this.setState({ paused: false})
    }
  }
  
  render() {
    return (
      <VideoPlayerLayout
        setRef={(element) => (this.player = element)}
      >
        <Title title={this.props.title}/>
        <Video
          autoplay={this.props.autoplay}
          src="https://dev-files-provider.s3.us-east-2.amazonaws.com/wolves_hauling.mp4"
          paused={this.state.paused}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleTimeSeeking={this.handleTimeSeeking}
          handleTimeSeeked={this.handleTimeSeeked}
          toggleReproduction={this.toggleReproduction}
        />
        {this.state.loading &&
          <Spinner active={this.state.loading} />
        }
        <VideoControls>
          <PlayPause
            handleClick={this.toggleReproduction}
            paused={this.state.paused}
          />
          <TimeInfo
            current={this.state.currentTime}
            duration={this.state.duration}
          />
          <ProgressBar
            actual={this.state.currentTime}
            total={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <VolumeControl
            handleVolumeChange={this.handleVolumeChange}
            handleMute={this.handleMute}
          />
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </VideoControls>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;