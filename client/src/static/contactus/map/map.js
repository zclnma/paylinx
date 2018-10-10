import React from 'react';

import './map.css';

import map from '../images/img_map.jpg';
import sm2 from '../images/icon_socialMedia-02.png';
import sm3 from '../images/icon_socialMedia-03.png';
import sm4 from '../images/icon_socialMedia-04.png';
import sm5 from '../images/icon_socialMedia-05.png';
import sm6 from '../images/icon_socialMedia-06.png';


export default () => {

  return (
    <div styleName="banner" id='location'>
    <img src={map} alt=""/>
        <div styleName="bannerInfo">
            <div styleName="orange"></div>
            <div styleName="content">
              <div style={{marginBottom: "20px"}}styleName="lato-title">Our details</div>
              <div>
                <div styleName="detail-line">
                  <div style={{width: '30%'}}styleName="lato-subtitle">Address:</div>
                  <div style={{display: 'block'}}>
                    <div className="body">Suite 12, Level 9, 401 Docklands Dve, Docklands, VIC 3008</div>
                    <div className="body">Suite 3, Level 29, 31 Market St, Sydney, NSW 2000</div>
                  </div>
                </div>
                <div styleName="detail-line">
                  <div style={{width: '30%'}}styleName="lato-subtitle">Phone:</div>
                  <div className="body">1300 03 12 83</div>
                </div>
                <div styleName="detail-line">
                  <div style={{width: '30%'}}styleName="lato-subtitle">Email:</div>
                  <div className="body">info@paylinx.com.au</div>
                </div>
                <div styleName="detail-line">
                  <div style={{width: '30%'}}styleName="lato-subtitle">Business hours:</div>
                  <div className="body">10am-6pm (Mon-Fri)</div>
                </div>
              </div>
              <div styleName="icons">
                <span > <img src={sm2} alt="" /></span>     
                <span ><a href='https://www.facebook.com/paylinx/' rel="noopener noreferrer" target="_blank"><img src={sm3} alt="" /></a></span>   
                <span ><a href='https://twitter.com/marketpaylinx?lang=en' rel="noopener noreferrer" target="_blank"><img src={sm5} alt="" /></a></span>
                <span ><a href='https://www.instagram.com/paylinxau/?hl=en' rel="noopener noreferrer" target="_blank"><img src={sm4} alt="" /></a></span>
                <span ><a href='https://www.linkedin.com/company/paylinx-%E9%A2%86%E5%AE%A2%E6%94%AF%E4%BB%98/' rel="noopener noreferrer" target="_blank"><img src={sm6} alt="" /></a></span>
              </div>
            </div>
        </div>
</div>
  )
}
