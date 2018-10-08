import React from 'react';
import './map.css';
import map from '../images/img_map.jpg';
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
            </div>
        </div>
</div>
  )
}
