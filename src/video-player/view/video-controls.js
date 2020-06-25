import React from 'react';
import './video-controls.css';

const VideoControls = (props) => (
  <div className="VideoControls">
    {props.children}
  </div>
);

export default VideoControls;