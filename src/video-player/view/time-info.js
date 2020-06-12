import React from 'react';
import './time-info.css';

const TimeInfo = (props) => (
  <div className="TimeInfo">
    <p>{props.duration}</p>
  </div>
);

export default TimeInfo;