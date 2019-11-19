import React, {Component} from 'react';
import HomeLayout from '../view/home-layout';
import Feed from '../../feed/view/feed';
import RelatedLayout from '../../related/view/related-layout';
import Modal from '../../widgets/control/modal';
import ModalLayout from '../../widgets/view/modal-layout';

class Home extends Component {

  render(){
    return(
      <HomeLayout>
        <RelatedLayout />
        <Feed data={this.props.data} />
        <Modal>
          <ModalLayout>
            Modal
          </ModalLayout>
        </Modal>
      </HomeLayout>
    )
  }
}

export default Home;