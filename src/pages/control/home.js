import React, {Component} from 'react';
import HomeLayout from '../view/home-layout';
import Feed from '../../feed/view/feed';
import RelatedLayout from '../../related/view/related-layout';
import Modal from '../../widgets/control/modal';
import ModalLayout from '../../widgets/view/modal-layout';
import HandleError from '../../error-handling/control/error-handler';
import VideoPlayer from '../../video-player/control/video-player';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
    };
  }

  handleClickMedia = (mediaInfo) => {
    this.setState({modalOn: true, mediaInfo});
  }

  handleCloseModal = () => {
    this.setState({modalOn: false});
  }

  render(){
    return(
      <HandleError>
        <HomeLayout>
          <RelatedLayout />
          <Feed data={this.props.data} handleClickMedia={this.handleClickMedia} />
          {
            this.state.modalOn && // Evaluación cortocircuito
            <Modal>
              <ModalLayout handleClose={this.handleCloseModal}>
                <VideoPlayer autoplay={true} title={this.state.mediaInfo.title}/>
              </ModalLayout>
            </Modal>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;