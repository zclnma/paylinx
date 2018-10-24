import React, { Component } from 'react'
import {Popover} from 'antd';
import {NavHashLink as Link} from 'react-router-hash-link';
import MediaQuery from 'react-responsive';

import MenuList from '../menus';
import wechatQR from './images/wechatQR.png';
import wechat from './images/icon_socialMedia-07.png';
import facebook from './images/icon_socialMedia-08.png';
import linkedin from './images/icon_socialMedia-09.png';
import twitter from './images/icon_socialMedia-10.png';
import ins from './images/icon_socialMedia-11.png';

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
                    <div styleName="lato-subtitle">CUSTOMER SERVICE LINE</div>
                    <div styleName="lato-oversize">1300 03 12 83</div>
                </div>
                <div styleName="follow">
                    <div style={{marginLeft:'15px'}} styleName="lato-subtitle">FOLLOW US ON</div>
                    <div styleName="icons">
                        <span styleName="icon"> <Popover content={content}>
                            <img src={wechat} alt="" />
                        </Popover></span>  
                        <span styleName="icon"><a href='https://www.facebook.com/paylinx/' rel="noopener noreferrer" target="_blank"><img src={facebook} alt="" /></a></span>      
                        <span styleName="icon"><a href='https://twitter.com/marketpaylinx?lang=en' rel="noopener noreferrer" target="_blank"><img src={twitter} alt="" /></a></span>
                        <span styleName="icon"><a href='https://www.instagram.com/paylinxau/?hl=en' rel="noopener noreferrer" target="_blank"><img src={ins} alt="" /></a></span>
                        <span styleName="icon"><a href='https://www.linkedin.com/company/paylinx-%E9%A2%86%E5%AE%A2%E6%94%AF%E4%BB%98/' rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="" /></a></span>
                    </div>
                </div>
            </div>
            <hr style={{color: '#a0a0a0'}}/>
            <MediaQuery query="(min-width: 501px)">
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
                                    className="body">
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
                                    className="body">
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
                                className="body">
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
                                className="body">
                                {me.value}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div styleName="menu">
                    <a 
                        href={MenuList.login.link}
                        styleName="link"
                        className="lato-subtitle"
                        rel="noopener noreferrer" target="_blank">
                            {MenuList.login.title}
                    </a>
                    <ul>
                        {MenuList.login.menu.map((me,index) => {
                            return <li key={index}>
                            <a
                                href={me.link}
                                styleName="link"
                                className="body"
                                rel="noopener noreferrer" target="_blank">
                                {me.value}
                            </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 501px)">
            {Object.keys(MenuList).map((key,index) => {
                return MenuList[key].title === 'LOG IN' ?  
                <a 
                    key={index} 
                    href={MenuList[key].link}
                    styleName="link"
                    className="lato-subtitle"
                    rel="noopener noreferrer" target="_blank">
                        {MenuList[key].title}
                </a> :
                    <Link
                    key={index} 
                    to={MenuList[key].link}
                    styleName="link"
                    className="lato-subtitle"
                    onClick={this.scrollToTop}>
                        {MenuList[key].title}|
                    </Link>                
            })}
            </MediaQuery>
            <div styleName="disclaimer">
                <div styleName="copyright" className="body">Copyright © 2018 Paylinx Pty Ltd. All rights reserved. |</div>
                <div style={{borderBottom:'1px solid gray'}}>
                <Link 
                    to='/privacy-policy'
                    styleName="link"
                    className="body">
                    Privacy Policy
                </Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
