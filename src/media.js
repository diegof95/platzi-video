import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/media.css';

class Media extends Component {

  constructor(props){
    super(props);
    this.state = {
      author: props.author,
    }
  }

  // Asignamos funcion arrow para heredar env de la class
  handleClick = (event) => {
    this.setState({
      author: "Diego",
    });
  }

  render(){
    return( //JSX
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img className="Media-image" src={this.props.cover}
              alt="Bj&ouml;rk Post"
              width={260} height={160}
            />
            <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
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