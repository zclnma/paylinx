import React from 'react'
import './tailor.css';
import tailor from '../images/img_tailor.png';
export default () => {
  return (
    <div styleName="container" id='tailor'>
        <div style={{width: '80%',margin:'auto'}}styleName="lato-title">Paylinx’s tailor made strategy for your business</div>
        <img src={tailor} alt="" />
    </div>
  )
}
