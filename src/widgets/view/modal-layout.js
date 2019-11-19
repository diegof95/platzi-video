import React from 'react';
import './modal.css';

function ModalLayout(props) {
  return (
    <div className="Modal">
      {props.children}
    </div>
  )
}

export default ModalLayout;