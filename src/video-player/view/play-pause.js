import React from 'react';
import Play from '../../icons/view/play';
import Pause from '../../icons/view/pause';
import './play-pause.css';

const PlayPause = (props) => (
  <div className='PlayPause'>
    <button onClick={props.handleClick}>
      { props.paused ?
          <Play
            size={25}
            color='white'
          />
        :
          <Pause
            size={25}
            color='white'
          />
      }
    </button>
  </div>
);

export default PlayPause;