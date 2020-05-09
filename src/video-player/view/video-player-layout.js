import React from 'react';
import './video-player.css';

const VideoPlayerLayout = (props) => (
  <div className="VideoPlayer">
    {props.children}
  </div>
);

export default VideoPlayerLayout;