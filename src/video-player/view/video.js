import React, {Component} from 'react';

class Video extends Component {
  
  togglePlay() {
    this.props.paused ?
      this.video.play()
    :
      this.video.pause();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.props.paused != nextProps.paused){
      this.togglePlay();
    }
  }
  
  render() {
    
    const {
      autoplay,
      src,
      handleLoadedMetadata,
      handleTimeUpdate,
      toggleReproduction,
      handleTimeSeeking,
      handleTimeSeeked
    } = this.props;
    
    return(
      <video
        autoPlay={autoplay}
        src={src}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlaying={console.log("playing")}
        onPause={console.log("pause")}
        onSeeking={handleTimeSeeking}
        onSeeked={handleTimeSeeked}
        ref={(element) => this.video = element}
      />
    );
  }
}

export default Video;