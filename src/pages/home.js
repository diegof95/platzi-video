import React, {Component} from 'react';
import HomeLayout from './home-layout';
import Feed from '../feed/feed';
import RelatedLayout from '../related/related-layout';

class Home extends Component {

  render(){
    return(
      <HomeLayout>
        <RelatedLayout />
        <Feed data={this.props.data} />
      </HomeLayout>
    )
  }
}

export default Home;