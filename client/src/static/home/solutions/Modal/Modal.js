import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from './Backdrop/Backdrop';

const modal = (props) =>(
  <Fragment>
    <Backdrop
    show={props.show}
    clicked={props.modalClosed}/>
    <div
      styleName="Modal"
      style={{
        display: props.show ?  'block': 'none' ,
        opacity:  props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Fragment>
);

export default modal;
