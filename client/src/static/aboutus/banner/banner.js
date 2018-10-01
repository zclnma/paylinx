import React from 'react';
import style from './banner.css';
import landingPage from '../images/img_aboutUs.jpg';
export default () => {
  return (
    <div className={style.banner}>
        <img src={landingPage} alt="landingPage"/>
            <div className={style.bannerInfo}>
                <div className={style.orange}></div>
                <span className={style.Latoh1}>About Us</span>
                <div className={style.SourceB}>Paylinx is an integrated mobile payment and marketing platform that connects Australian merchants and Chinese consumers. Mobile payment is the future of commerce, and Chinese consumers travelling abroad or, driving businesses and market growth globally.</div>
            </div>
    </div>
  )
}
