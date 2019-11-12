import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Playlist from './playlist';
import './css/feed.css';

class Feed extends Component {

  render(){

    const categories = this.props.data.categories;

    return(
      <div className="Feed">
      {
        categories.map(
          (item) => {
            return( <Playlist
                {...item}
                key={item.id}
              />
            )
          }
        )
      }
      </div>
    )
  }
}

  export default Feed;