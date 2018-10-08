import React from 'react';
import './banner.css';
import landingPage from '../images/img_caseStudies.jpg';
export default () => {
  return (
    <div styleName="banner">
        <img src={landingPage} alt="landingPage"/>
            <div styleName="bannerInfo">
                <div styleName="orange"></div>
                <span className="lato-title">Our Clients</span>
                <div styleName="body">Currently we have more than 3000 merchants in Australia that utilise our services. We provide access and marketing to our merchants utilising our 200+ media channels in China and in the Australian Chinese community.</div>
            </div>
    </div>
  )
}
