import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => (
  <div className="ProgressBar">
    <input
      type="range"
      min={0}
      max={props.total}
      step={0.5}
      value={props.actual}
      onChange={props.handleProgressChange}
    />
  </div>
);

export default ProgressBar;