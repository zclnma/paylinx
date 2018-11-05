import React from 'react';
import './banner.css';
import landingPage from '../images/img_aboutUs.jpg';
export default () => {
  return (
    <div styleName="banner">
        <img src={landingPage} alt="landingPage"/>
            <div styleName="bannerInfo">
                <div styleName="orange"></div>
                <span className="lato-title">About Us</span>
                <div styleName="body">Paylinx is a FinTech company specialised in integrated mobile payments, marketing and media that connects Australian merchants and Chinese consumers. Mobile payment is the future of commerce, driving businesses and market growth globally. Paylinx is the WeChat Pay and Alipay service provider in Australia, the biggest mobile payment services.</div>
            </div>
    </div>
  )
}
