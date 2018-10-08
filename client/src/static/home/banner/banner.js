import React from 'react';
import './banner.css';
import landingPage from '../images/img_home.jpg';
import {Link} from 'react-router-dom';
export default () => {
  return (
    <div styleName="banner">
        <img src={landingPage} alt="landingPage"/>
          <div styleName="shadowCircle">
            <div style={{width:'80%',height:'70%',margin:'auto',marginTop:'22%', marginRight: '0%'}}>
              <div styleName="orange"></div>
              <div styleName="lato-cover">TRANSFORM</div>
              <div styleName="lato-cover-thin">YOUR BUSINESS</div>
              <div styleName="lato-cover-thin">TO BE</div>
              <div styleName="lato-cover">CHINA READY</div>
              <div styleName="getInTouchContainer">
                <div styleName="getInTouch"><Link to='/contact-us' style={{ color:'white'}}> GET STARTED</Link></div>
              </div>
            </div>
          </div>
          
    </div>
  )
}
