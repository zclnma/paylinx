import React from 'react';
import './banner.css';
import landingPage from '../images/img_solution.jpg';
export default () => {
  return (
    <div styleName="banner">
        <img src={landingPage} alt="landingPage"/>
            <div styleName="bannerInfo">
                <div styleName="orange"></div>
                <span className="lato-title">Solution</span>
                <div styleName="body">Let us help you bring your brand to life by providing your business the tools to Attract, Engage, and Convert your products and services into real dollars connecting with Chinese consumers.</div>
            </div>
    </div>
  )
}
