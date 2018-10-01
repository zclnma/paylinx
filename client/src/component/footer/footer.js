import React, { Component } from 'react'
import style from './footer.css';
import {Link} from 'react-router-dom';
import {Icon, Popover} from 'antd';
import MenuList from '../menus';
import wechatQR from './images/wechatQR.png';
export default class footer extends Component {
  render() {

    let content = <div className={style.wechatQR}>
        <img src={wechatQR} alt=""/>
    </div>
    return (
      <div className={style.footer}>
        <div className={style.container}>
            <div className={style.section}>
                <div className={style.number}>
                    <h5>CUSTOMER SERVICE HOTLINE</h5>
                    <h2>1300 03 12 83</h2>
                </div>
                <div className={style.follow}>
                    <h5>FOLLOW US ON</h5>
                        <a href='https://www.facebook.com/paylinx/'><Icon className={style.icon} style={{bottom: '-30px',left: '12px'}}type="facebook" theme="outlined" /></a>
                        <Popover content={content}>
                            <Icon className={style.icon} style={{cursor: 'pointer', bottom: '-30px',left: '49px'}} type="wechat" theme="outlined" />  
                        </Popover>                        
                        <a href='https://twitter.com/marketpaylinx?lang=en'><Icon className={style.icon} style={{bottom: '-30px',left: '86px'}}type="twitter" theme="outlined" /></a>
                        <a href='https://www.instagram.com/paylinxau/?hl=en'><Icon className={style.icon}style={{bottom: '-30px',left: '123px'}}type="instagram" theme="outlined" /></a>
                        <a href='https://www.linkedin.com/company/paylinx-%E9%A2%86%E5%AE%A2%E6%94%AF%E4%BB%98/'><Icon className={style.icon} style={{bottom: '-30px',left: '160px'}}type="linkedin" theme="outlined" /></a>
                    </div>
            </div>
            <hr style={{color: '#a0a0a0'}}/>
            <div className={style.section}>
                <div className={style.menu}>
                    <h5>{MenuList.aboutUs.title}</h5>
                    <ul>
                        {MenuList.aboutUs.menu.map((me,index) => {
                            return <li key={index}>{me.value}</li>
                        })}
                    </ul>
                </div>

                <div className={style.menu}>
                    <h5>ABOUT US</h5>
                    <ul>
                        <li>Industries we serve</li>
                        <li>Our story</li>
                        <li>Our values</li>
                    </ul>
                </div>
                <div className={style.menu}>
                    <h5>SOLUTIONS</h5>
                    <ul>
                        <li>WeChat Pay</li>
                        <li>AliPay</li>
                        <li>Talior made stragegies</li>
                    </ul>
                </div>
                <div className={style.menu} >
                    <h5>CASE STUDIES</h5>
                    <ul>
                        <li>Case studies</li>
                        <li>Testimonies</li>
                    </ul>
                </div>
                <div className={style.menu}>
                    <h5>CONTACT US</h5>
                    <ul>
                        <li>Enquire form</li>
                        <li>Our location</li>
                        <li>Download our App</li>
                    </ul>
                </div>
                <div className={style.menu}>
                    <h5>LOGIN</h5>
                    <ul>
                        <li>Merchant login</li>
                        <li>Agency login</li>
                        <li>API document</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
