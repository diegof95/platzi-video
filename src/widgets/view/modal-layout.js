import React from 'react';
import './modal.css';

function ModalLayout(props) {
  return (
    <div className="Modal">
      {props.children}
      <button className="Modal-close" onClick={props.handleClose}></button>
    </div>
  )
}

export default ModalLayout;