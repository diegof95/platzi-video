import React, {Component} from 'react';
import './css/media.css';

class Media extends Component {

    render(){
        return( //JSX
            <div className="Media">
                <div>
                    <img src=""
                        alt=""
                        width={260} height={160}
                    />
                    <h3>Fox</h3>
                    <p> Media zorro </p>
                </div>
            </div>
        )
    }
}

export default Media;