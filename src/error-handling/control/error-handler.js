import React, { Component } from 'react';
import GeneralError from '../view/general-error';

class HandleError extends Component {

  state = {error: false};

  componentDidCatch(error, info){
    this.setState({error: true})
  }

  render(){
    if(this.state.error){
      return (
        <GeneralError />
      );
    }
    return this.props.children;
  }
}

export default HandleError;