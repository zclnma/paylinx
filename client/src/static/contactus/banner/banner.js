import React from 'react';
import style from './banner.css';
import landingPage from '../images/img_contactUs.jpg';
export default () => {
  return (
    <div className={style.banner}>
        <img src={landingPage} alt="landingPage"/>
            <div className={style.bannerInfo}>
                <div className={style.orange}></div>
                <span className={style.Latoh1}>Contact Us</span>
                <div className={style.SourceB}>Speak to Paylinx today about how we can connect your business to the WeChat and Alipay ecosystems.</div>
            </div>
    </div>
  )
}
