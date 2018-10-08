import React from 'react';
import './banner.css';
import landingPage from '../images/img_contactUs.jpg';
export default () => {
  return (
    <div styleName="banner">
        <img src={landingPage} alt="landingPage"/>
            <div styleName="bannerInfo">
                <div styleName="orange"></div>
                <span styleName="lato-title">Contact Us</span>
                <div styleName="body">Speak to Paylinx today about how we can connect your business to the WeChat and Alipay ecosystems, and start attracting Chinsese consumers. </div>
            </div>
    </div>
  )
}
