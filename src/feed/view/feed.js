import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Playlist from './playlist';
import Search from '../../widgets/control/search';
import './feed.css';

function Feed(props) {

    const categories = props.data.categories;

    return(
      <div className="Feed">
        <Search />
      {
        categories.map(
          (item) => {
            return(
              <Playlist
                {...item}
                key={item.id}
                handleClickMedia={props.handleClickMedia}
              />
            )
          }
        )
      }
      </div>
    )
}

export default Feed;