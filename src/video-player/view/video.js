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
    console.log(this.props.autoplay)
    return(
      <video
        controls    
        autoPlay={this.props.autoplay}
        src={this.props.src}
        ref={(element) => this.video = element}
      />
    );
  }
}

export default Video;