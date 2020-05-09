import React from 'react';
import Play from '../../icons/view/play';
import Pause from '../../icons/view/pause';
import './play-pause.css';

const PlayPause = (props) => (
  <div className='PlayPause'>
    { props.paused ?
      <button onClick={props.handleClick}>
        <Play
          size={35}
          color='white'
        />
      </button>
      :
      <button onClick={props.handleClick}>
        <Pause
          size={35}
          color='white'
        />
      </button>
    }
  </div>
);

export default PlayPause;