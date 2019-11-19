import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './media.css';

class Media extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     author: props.author,
  //   }
  // }

  //ECMAScript7
  state = {
    author: this.props.author,
  }

  // Asignamos funcion arrow para heredar env de la class
  handleClick = (event) => {
    this.setState({
      author: "Cambiaste el estado c:",
    });
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