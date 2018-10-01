import React from 'react'
import style from './help.css';
import Alipay from '../images/logo_Alipay.png';
import WechatPay from '../images/logo_WeChat Pay.png';
import Cards from './cards/cards';
export default () => {
  return (
    <div className={style.container}>
    <span className={style.Latoh2}>Paylinx services help your business</span>
    <div style={{marginBottom: '40px', width:'60%',margin:'auto'}} className={style.SourceB}>
      paylinx is committed to delivering advanced solutions which provide professional and secure payment acceptance models.
    </div>
    <div className={style.logoContainer}>
      <img src={Alipay} alt="" />
      <img src={WechatPay} alt="" />
    </div>
    <Cards />
  </div>
  )
}
