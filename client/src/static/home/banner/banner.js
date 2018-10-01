import React from 'react';
import style from './banner.css';
import landingPage from '../images/img_home.jpg';
import {Link} from 'react-router-dom';
export default () => {
  return (
    <div className={style.banner}>
        <img src={landingPage} alt="landingPage"/>
          <div className={style.shadowCircle}>
            <div className={style.content} style={{width:'80%',height:'70%',margin:'auto',marginTop:'22%', marginRight: '0%',lineHeight:'1.8rem'}}>
              <div className={style.orange}></div>
              <span style={{display:'block'}}className={style.Latoh2}>TRANSFORM</span>
              <span style={{display:'block'}}className={style.Latoh21}>YOUR BUSINESS</span>
              <span style={{display:'block'}}className={style.Latoh21}>TO BE</span>
              <span className={style.Latoh2}>CHINA READY</span>
              <div className={style.getInTouchContainer}>
                <div className={style.getInTouch}><Link to='/contact-us' style={{ color:'white'}}> GET STARTED</Link></div>
              </div>
            </div>
          </div>
          
    </div>
  )
}
