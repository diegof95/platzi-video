import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Media from './media';
import './css/playlist.css';
import FullScreen from './icons/full-screen';

function Playlist(props) {

    const title = props.title;
    const description = props.description;
    const playlist = props.playlist;

    return(

      <div className="Category">
        <p className="Category-description">{description}</p>
        <h2 className="Category-title">{title}</h2>
        <FullScreen size={25} color="blue" />
        <div className="Playlist">
        {
          playlist.map(
            (item) => {
              return( <Media
                  {...item}
                  key={item.id}
                />
              )
            }
          )
        }
        </div>
      </div>
    )
}

export default Playlist;