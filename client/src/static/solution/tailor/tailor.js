import React from 'react'
import './tailor.css';
import tailor from '../images/img_tailorMade.jpg';
export default () => {
  return (
    <div styleName="container" id='tailor'>
        <div styleName="lato-title">Paylinx’s tailor made strategy for your business</div>
        <img src={tailor} alt="" />
    </div>
  )
}
