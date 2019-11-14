import React, {Component} from 'react';
import HomeLayout from './home-layout';
import Feed from '../feed/feed';

class Home extends Component {

  render(){
    return(
      <HomeLayout>
        <Feed data={this.props.data} />
      </HomeLayout>
    )
  }
}

export default Home;