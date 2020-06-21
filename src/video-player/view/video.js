import React, {Component} from 'react';

class Video extends Component {
  
  togglePlay() {
    this.props.paused ?
      this.video.play()
    :
      this.video.pause();
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.paused != nextProps.paused){
      this.togglePlay();
    }
  }
  
  render() {
    
    const {
      autoplay, src, handleLoadedMetadata,
      handleTimeupdate, toggleReproduction
    } = this.props;
    
    return(
      <video
        controls    
        autoPlay={autoplay}
        src={src}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeupdate}
        onPlaying={console.log("playing")}
        onPause={console.log("pause")}
        ref={(element) => this.video = element}
      />
    );
  }
}

export default Video;