import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './media.css';

class Media extends Component {

  handleClick = (event) => {
    this.props.handleClickMedia(
      {
        title: this.props.title
      }
    )
  }

  render(){
    return( //JSX
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img className="Media-image" src={this.props.cover}
              alt={this.props.title}
              width={260} height={160}
            />
            <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
          </div>
        </div>
      )
    }
}

Media.propTypes = {
  type: PropTypes.oneOf(['audio', 'video']),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default Media;