import React from 'react';
import style from './map.css';
import map from '../images/img_map.jpg';
import {Table} from 'antd'; 
export default () => {

  return (
    <div className={style.banner} id='location'>
    <img src={map} alt=""/>
        <div className={style.bannerInfo}>
            <div className={style.orange}></div>
            <div className={style.Latoh1}>Get in touch</div>
            <div className={style.container}>
            </div>
        </div>
</div>
  )
}
