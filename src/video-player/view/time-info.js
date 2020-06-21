import React from 'react';
import './time-info.css';

const timeFormatter = (timeSeconds) => {
  const minutes = parseInt(timeSeconds / 60);
  const seconds = parseInt(timeSeconds % 60);
  return `${minutes}:${seconds}`;
}

const TimeInfo = (props) => (
  <div className="TimeInfo">
    <p>{timeFormatter(props.current)} / {timeFormatter(props.duration)}</p>
  </div>
);

export default TimeInfo;