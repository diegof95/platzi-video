import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Media from './media';
//import './css/playlist.css';

class Playlist extends Component {

    render(){

        const playlist = this.props.data.categories[0].playlist;

        return(
            <div>
            {
                playlist.map(
                    (item) => {
                        return <Media key={item.id}
                                    title={item.title}
                                    cover={item.cover} />
                    }
                )
            }
            </div>
        )
    }
}

export default Playlist;