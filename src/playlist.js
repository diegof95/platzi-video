import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Media from './media';
import './css/playlist.css';

class Playlist extends Component {

  render(){

    const title = this.props.title;
    const description = this.props.description;
    const playlist = this.props.playlist;

    return(

      <div className="Category">
        <p className="Category-description">{description}</p>
        <h2 className="Category-title">{title}</h2>
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
}

  export default Playlist;