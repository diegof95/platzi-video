import React, {Component} from 'react';
import HomeLayout from '../view/home-layout';
import Feed from '../../feed/view/feed';
import RelatedLayout from '../../related/view/related-layout';
import Modal from '../../widgets/control/modal';
import ModalLayout from '../../widgets/view/modal-layout';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOn: false
    };
  }

  handleClickMedia = () => {
    this.setState({modalOn: true});
  }

  handleCloseModal = () => {
    this.setState({modalOn: false});
  }

  render(){
    return(
      <HomeLayout>
        <RelatedLayout />
        <Feed data={this.props.data} handleClickMedia={this.handleClickMedia} />
        {
          this.state.modalOn && // Evaluación cortocircuito
          <Modal>
            <ModalLayout handleClose={this.handleCloseModal}>
              <h1>Modal</h1>
            </ModalLayout>
          </Modal>
        }
      </HomeLayout>
    )
  }
}

export default Home;