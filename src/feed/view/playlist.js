import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Media from './media';
import './playlist.css';

function Playlist(props) {

    const title = props.title;
    const description = props.description;
    const playlist = props.playlist;

    return(

      <div className="Category">
        <p className="Category-description">{description}</p>
        <h2 className="Category-title">{title}</h2>
        <div className="Playlist">
        {
          playlist.map(
            (item) => {
              return(
                <Media
                  {...item}
                  key={item.id}
                  handleClick={props.handleClickMedia}
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