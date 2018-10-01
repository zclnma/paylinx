import React from 'react';
import style from './banner.css';
import landingPage from '../images/img_solution.jpg';
export default () => {
  return (
    <div className={style.banner}>
        <img src={landingPage} alt="landingPage"/>
            <div className={style.bannerInfo}>
                <div className={style.orange}></div>
                <span className={style.Latoh1}>Solution</span>
                <div className={style.SourceB}>Let us help you bring your brand to life by providing your business the tools to Attract, Engage, and Convert your products and services into real dollars connecting with Chinese consumers.</div>
            </div>
    </div>
  )
}
