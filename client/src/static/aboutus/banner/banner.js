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
                <div styleName="body">Paylinx is an integrated mobile payment and marketing platform that connects Australian merchants and Chinese consumers. Mobile payment is the future of commerce, and Chinese consumers travelling abroad or, driving businesses and market growth globally.</div>
            </div>
    </div>
  )
}
