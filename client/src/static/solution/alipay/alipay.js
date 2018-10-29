import React from 'react'
import './alipay.css';
import Alipay from '../images/logo_Alipay.png';
import Merchants from '../images/img_logos.png';
import Ali from '../images/img_discovery.png';
export default () => {
  return (
    <div styleName="container" id='alipay'>
        <span styleName="lato-title">Alipay Solutions</span>
        <div styleName="ali-logo"><img src={Alipay} alt="" /></div>
        <div styleName="content">
          <div className="body">Since debuting as a simple e-payment system, Alipay has transformed itself into a destination app (and website) in it’s own right. As the Chinese have fast become acustomed to transacting via their phones, with it’s huge built-in user base, Alipay continues to drive innovation in mobile payments.</div>
          <div className="body">Alipay and Alibaba are integral to each other’s success, and because of Alipay’s flexibility and many potential uses, in the longer term it is considered that Alipay will turn out to be the more important business.</div>
          <div className="body">With Alipay, Chinese tourists and international students will find your business directly on their phone where they will be able to view your products, get directions to your store, hotel or restaurant, and even use coupons in-store.</div>
        </div>     
        <div styleName="ali"><img src={Merchants} alt="" /></div>
        <div styleName="lato-title">DISCOVER PLATFORM</div>
        <div styleName="content" className="body">As the world’s largest mobile payment platform, Alipay’s Discover Platform allows your business to leverage the Alibaba data ecosystem to achieve precise marketing outcomes. Discover Platform is an Alipay in-app platform which helps Chinese overseas connect, interact and meet with merchants. </div>
        <div styleName="ali"><img src={Ali} alt="" /></div>
    </div>
  )
}
