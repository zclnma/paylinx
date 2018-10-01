import React from 'react'
import style from './alipay.css';
import Alipay from '../images/logo_Alipay.png';
import Merchants from '../images/img_logos.jpg';
import Ali from '../images/img_alipay.jpg';
export default () => {
  return (
    <div className={style.container} id='alipay'>
        <span className={style.Latoh2}>Alipay Solutions</span>
        <div style={{marginBottom: '40px'}}><img style={{maxWidth:'80px'}} src={Alipay} alt="" /></div>
        <div style={{width: '80%', margin: 'auto'}}>
          <div className={style.SourceB}>Since debuting as a simple e-payment system, Alipay has transformed itself into a destination app (and website) in it’s own right. As the Chinese have fast become acustomed to transacting via their phones, with it’s huge built-in user base, Alipay continues to drive innovation in mobile payments.</div>
          <div className={style.SourceB}>Alipay and Alibaba are integral to each other’s success, and because of Alipay’s flexibility and many potential uses, in the longer term it is considered that Alipay will turn out to be the more important business.</div>
          <div className={style.SourceB}>With Alipay, Chinese tourists and international students will find your business directly on their phone where they will be able to view your products, get directions to your store, hotel or restaurant, and even use coupons in-store.</div>
        </div>     
        <div className={style.ali}><img src={Merchants} alt="" /></div>
        <div className={style.Latoh31}>DISCOVER PLATFORM</div>
        <div style={{width: '60%', margin: 'auto'}}className={style.SourceB}>As the world’s largest mobile payment platform, Alipay’s Discover Platform allows your business to leverage the Alibaba data ecosystem to achieve precise marketing outcomes. Discover Platform is an Alipay in-app platform which helps Chinese overseas connect, interact and meet with merchants. </div>
        <div className={style.ali}><img src={Ali} alt="" /></div>
    </div>
  )
}