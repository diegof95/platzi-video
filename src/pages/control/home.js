import React, {Component} from 'react';
import HomeLayout from '../view/home-layout';
import Feed from '../../feed/view/feed';
import RelatedLayout from '../../related/view/related-layout';
import Modal from '../../widgets/control/modal';
import ModalLayout from '../../widgets/view/modal-layout';
import HandleError from '../../error-handling/control/error-handler';

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
      <HandleError>
        <HomeLayout>
          <RelatedLayout />
          <Feed data={this.props.datas} handleClickMedia={this.handleClickMedia} />
          {
            this.state.modalOn && // Evaluación cortocircuito
            <Modal>
              <ModalLayout handleClose={this.handleCloseModal}>
                <h1>Modal</h1>
              </ModalLayout>
            </Modal>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;