import React from 'react';
import VolumeIcon from '../../icons/view/volume';
import './volume.css';

const VolumeControl = (props) => (
  <button
    className="Volume"
    onClick={props.handleMute}
  >
      <VolumeIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
  </button>
)

export default VolumeControl;