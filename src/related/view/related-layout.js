import React from 'react';

import './related.css'
import logo from '../../../images/logo.png';

function RelatedLayout(props) {

  return(
    <div>
      <img className='Related' src={logo} alt='Logo' width={250} />
    </div>
  )
}

export default RelatedLayout;