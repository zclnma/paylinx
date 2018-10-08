import React from 'react'
import './download.css';
import download from '../images/img_downloadOurApp.png';
export default () => {
  return (
    <div styleName="container" id='download'>
        <div styleName="image">
            <img src={download} alt="" />
        </div>
    </div>
  )
}
