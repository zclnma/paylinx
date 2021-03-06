import React,{Component} from 'react';
import LazyLoad from 'react-lazyload';

import landingPage from '../images/img_home.jpg';
import {Link} from 'react-router-dom';

import './banner.css';

class Banner extends Component {

  render () {
    return (
      <div styleName="banner">
        <LazyLoad>
          <img src={landingPage} alt=""/>
        </LazyLoad>
            <div styleName="shadowCircle">
              <div style={{width:'80%',height:'70%',margin:'auto',marginTop:'22%', marginRight: '0%'}}>
                <div styleName="orange"></div>
                <div styleName="lato-cover">TRANSFORM</div>
                <div styleName="lato-cover-thin">YOUR BUSINESS</div>
                <div styleName="lato-cover-thin">TO BE</div>
                <div styleName="lato-cover">CHINA READY</div>
                <div styleName="getInTouchContainer">
                  <div styleName="getInTouch"><Link to='/contact-us' style={{color:'white'}}className="lato-ssubtitle"> GET STARTED</Link></div>
                </div>
              </div>
            </div>           
      </div>
    )
  }
}

export default Banner;