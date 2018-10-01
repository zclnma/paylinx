import React from 'react'
import style from './download.css';
import download from '../images/img_downloadOurApp.png';
export default () => {
  return (
    <div className={style.container} id='download'>
        <div className={style.image}>
            <img src={download} alt="" />
        </div>
    </div>
  )
}
