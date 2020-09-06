import React from 'react';
import './time-info.css';

const timeFormater = (time) => {
  
  let timeStr = time.toString();
  
  if(timeStr.length == 1) {
    //console.log('0'+timeStr)
    return ('0' + timeStr);
  }else {
    return timeStr;
  }
}

const timer = (timeSeconds) => {
  const minutes = parseInt(timeSeconds / 60);
  const seconds = parseInt(timeSeconds % 60);
  
  const minutesFormated = timeFormater(minutes);
  const secondsFormated = timeFormater(seconds);
  
  return `${minutesFormated}:${secondsFormated}`;
}

const TimeInfo = (props) => (
  <div className="TimeInfo">
    <p>{timer(props.current)} / {timer(props.duration)}</p>
  </div>
);

export default TimeInfo;