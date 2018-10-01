import React from 'react';
import style from './myer.css';
import MyerImage from '../images/img_myer.jpg';
import MyerLogo from '../images/logo_myer.png';
import Problem from '../images/icon_problem.png';
import Outcome from '../images/icon_outcome.png';
import Solution from '../images/icon_solution.png';

export default () => {
  return (
    <div className={style.container}>
          <img src={MyerImage} alt="" />
          <div className={style.content}>
            <img src={MyerLogo} alt= "" />
            <div className={style.sec}>
              <img src={Problem} alt="" />
              <div style={{position:'relative',marginLeft:'15%'}}>
                <span className={style.Latoh3}>Problem</span>
                <div className={style.SourceB}>
                This option is suited to merchants that have online-stores and booking-stores, or want to create them. Paylinx helps you providing the customer the option to purchase with WeChat Pay or Alipay when buying online. Chinese customers prefer to use this option because it is trusted and familiar for them. 
                </div>
              </div>
            </div>
            <div className={style.sec}>
              <img src={Solution} alt="" />
              <div style={{position:'relative',marginLeft:'15%'}}>
                <span className={style.Latoh3}>Solution</span>
                <div className={style.SourceB}>
                  <li>Existing Merchant Account website</li>
                  <li>Website QR code</li>
                  <li>Payment within WeChat & Alipay</li>
                  <li>Shopping app payment</li>
                  <li>Brower to Alipay</li>
                </div>
              </div>
            </div>
            <div className={style.sec}>
              <img src={Outcome} alt="" />
              <div style={{position:'relative',marginLeft:'15%'}}>
                <span className={style.Latoh3}>Outcome</span>
                <div className={style.SourceB}>
                This option is suited to merchants that have online-stores and booking-stores, or want to create them. Paylinx helps you providing the customer the option to purchase with WeChat Pay or Alipay when buying online. Chinese customers prefer to use this option because it is trusted and familiar for them. 
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
