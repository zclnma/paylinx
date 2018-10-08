import React, { Component } from 'react'
import {Popover} from 'antd';
import {NavHashLink as Link} from 'react-router-hash-link';

import MenuList from '../menus';
import wechatQR from './images/wechatQR.png';
import wechat from './images/icon_socialMedia-07.png';
import facebook from './images/icon_socialMedia-08.png';
import ins from './images/icon_socialMedia-09.png';
import twitter from './images/icon_socialMedia-10.png';
import linkedin from './images/icon_socialMedia-11.png';

import './footer.css';

export default class footer extends Component {

    scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  render() {

    let content = <div styleName="wechatQR">
        <img src={wechatQR} alt=""/>
    </div>
    return (
      <div styleName="footer">
        <div styleName="container">
            <div styleName="section-top">
                <div styleName="contact">
                    <div styleName="lato-subtitle">CUSTOMER SERVICE HOTLINE</div>
                    <div styleName="lato-oversize">1300 03 12 83</div>
                </div>
                <div styleName="follow">
                    <div className="lato-subtitle">FOLLOW US ON</div>
                    <div styleName="icons">
                        <a href='https://www.facebook.com/paylinx/'><img src={facebook} alt="" /></a>
                        <Popover content={content}>
                            <img src={wechat} alt="" />
                        </Popover>                        
                        <a href='https://twitter.com/marketpaylinx?lang=en'><img src={twitter} alt="" /></a>
                        <a href='https://www.instagram.com/paylinxau/?hl=en'><img src={ins} alt="" /></a>
                        <a href='https://www.linkedin.com/company/paylinx-%E9%A2%86%E5%AE%A2%E6%94%AF%E4%BB%98/'><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
            <hr style={{color: '#a0a0a0'}}/>
            <div styleName="section-bottom">
                <div styleName="menu">
                    <Link 
                        to={MenuList.aboutUs.link}
                        styleName="link"
                        className="lato-subtitle"
                        onClick={this.scrollToTop}>
                            {MenuList.aboutUs.title}
                    </Link>
                    <ul>
                        {MenuList.aboutUs.menu.map((me,index) => {
                            return <li key={index}>
                                    <Link
                                    to={[MenuList.aboutUs.link, me.htag].join('')} 
                                    styleName="link"
                                    className="lato-ssubtitle">
                                        {me.value}
                                    </Link>
                                </li>
                        })}
                    </ul>
                </div>
                <div styleName="menu">
                    <Link 
                        to={MenuList.solution.link}
                        styleName="link"
                        className="lato-subtitle"
                        onClick={this.scrollToTop}>
                            {MenuList.solution.title}
                    </Link>
                    <ul>
                        {MenuList.solution.menu.map((me,index) => {
                            return <li key={index}>
                                <Link
                                    to={[MenuList.solution.link, me.htag].join('')} 
                                    styleName="link"
                                    className="lato-ssubtitle">
                                    {me.value}
                                    </Link>
                                </li>
                        })}
                    </ul>
                </div>
                <div styleName="menu">
                    <Link 
                        to={MenuList.contactUs.link}
                        styleName="link"
                        className="lato-subtitle"
                        onClick={this.scrollToTop}>
                            {MenuList.contactUs.title}
                    </Link>
                    <ul>
                        {MenuList.contactUs.menu.map((me,index) => {
                            return <li key={index}>
                            <Link 
                                to={[MenuList.contactUs.link, me.htag].join('')} 
                                styleName="link"
                                className="lato-ssubtitle">
                                {me.value}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div styleName="menu">
                    <Link 
                        to={MenuList.caseStudy.link}
                        styleName="link"
                        className="lato-subtitle"
                        onClick={this.scrollToTop}>
                            {MenuList.caseStudy.title}
                    </Link>
                    <ul>
                        {MenuList.caseStudy.menu.map((me,index) => {
                            return <li key={index}>
                            <Link 
                                to={[MenuList.caseStudy.link, me.htag].join('')} 
                                styleName="link"
                                className="lato-ssubtitle">
                                {me.value}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div styleName="menu">
                    <Link 
                        to={MenuList.login.link}
                        styleName="link"
                        className="lato-subtitle"
                        onClick={this.scrollToTop}>
                            {MenuList.login.title}
                    </Link>
                    <ul>
                        {MenuList.login.menu.map((me,index) => {
                            return <li key={index}>
                            <Link
                                to={[MenuList.login.link, me.htag].join('')} 
                                styleName="link"
                                className="lato-ssubtitle">
                                {me.value}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div styleName="disclaimer">
                <div styleName="link"
                     className="lato-ssubtitle">Disclimer|Privacy Policy|Sitemap</div>
            </div>
        </div>
      </div>
    )
  }
}
