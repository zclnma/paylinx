import React from 'react'
import style from './tailor.css';
import tailor from '../images/img_tailorMade.jpg';
export default () => {
  return (
    <div className={style.container} id='tailor'>
        <div className={style.Latoh2}>Paylinx’s tailor made strategy for your business</div>
        <img src={tailor} alt="" />
    </div>
  )
}
