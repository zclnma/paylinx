import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import style from './header.css'

import Logo from './images/logo_orange.png';
import MenuIcon from './images/icon_burgerMenu4.png';
import SearchIcon from './images/icon_search.png';
import UserIcon from './images/icon_user2.png';
import Menus from './menus/menu';

import {Menu, Dropdown, Icon} from 'antd';
import Modal from './Modal/Modal';
import Search from './searchBar/searchBar';
import MenuList from '../menus';



export default class header extends Component {
    state = {
        showModal: false,
        showSearch: false
    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    showSearch = () => {
        this.setState({showSearch: true})
    }

    hideSearch = () => {
        this.setState({showSearch: false})
    }

  render() {

    const userMenu = (
        <Menu >
            <Menu.Item key="0">
            <a style={{ color:'rgba(0, 0, 0, 0.65)'}} href="http://paylinx.cn/merchant/login?returnUrl=http%3A%2F%2Fpaylinx.cn%2Fmerchant%3F">Merchant Login</a>
            </Menu.Item>
            <Menu.Item key="1">
            <a style={{ color:'rgba(0, 0, 0, 0.65)'}} href="http://paylinx.cn/merchant/login?returnUrl=http%3A%2F%2Fpaylinx.cn%2Fmerchant%3F">Agency Login</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
            <a style={{ color:'rgba(0, 0, 0, 0.65)'}} href="http://paylinx.cn/doc/index.html">API Documents</a>
            </Menu.Item>
        </Menu>
    );

    return (
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className={style.navItem}>
                    <div className={style.getInTouchContainer}>
                        <div className={style.getInTouch}><Link to='/contact-us' style={{ color:'white'}}> GET IN TOUCH</Link></div>
                    </div>
                    <div className={style.icon} onClick={this.showModal}> 
                        <img src={MenuIcon} alt="" />
                    </div>
                    <div className={style.icon}> 
                        <Dropdown overlay={userMenu} placement="bottomRight">
                            <img src={UserIcon} alt="" />
                        </Dropdown>
                    </div>
                    <div className={style.icon} onClick={this.showSearch}> 
                        <img src={SearchIcon} alt="" />
                    </div>
                </div>
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.hideModal}>
                    <div className={style.modalContainer}>
                        <span onClick={this.hideModal} style={{cursor:'pointer'}}>
                            <Icon 
                                style={{fontSize: '40px', position:'absolute', right: '40px', top: '40px', zIndex:'1'}} 
                                type="close" 
                                theme="outlined" /></span>
                            <Menus 
                                image={MenuList.aboutUs.image}
                                title={MenuList.aboutUs.title}
                                link={MenuList.aboutUs.link}
                                data={MenuList.aboutUs.menu}
                                color={MenuList.aboutUs.color}
                                />
                            <Menus 
                                image={MenuList.solution.image}
                                title={MenuList.solution.title}
                                link={MenuList.solution.link}
                                data={MenuList.solution.menu}
                                color={MenuList.solution.color}
                                />
                            <Menus 
                                image={MenuList.caseStudy.image}
                                title={MenuList.caseStudy.title}
                                link={MenuList.caseStudy.link}
                                data={MenuList.caseStudy.menu}
                                color={MenuList.caseStudy.color}
                                />
                            <Menus 
                                image={MenuList.contactUs.image}
                                title={MenuList.contactUs.title}
                                link={MenuList.contactUs.link}
                                data={MenuList.contactUs.menu}
                                color={MenuList.contactUs.color}
                                />
                            <Menus 
                                image={MenuList.login.image}
                                title={MenuList.login.title}
                                link={MenuList.login.link}
                                data={MenuList.login.menu}
                                color={MenuList.login.color}
                                />
                    </div>
                </Modal>
                <Modal
                    show={this.state.showSearch}
                    modalClosed={this.hideSearch}>
                    <div className={style.modalContainer}>
                        <span onClick={this.hideSearch} style={{cursor:'pointer'}}>
                            <Icon 
                                style={{fontSize: '40px', position:'absolute', right: '40px', top: '40px', zIndex:'1'}} 
                                type="close" 
                                theme="outlined" /></span>
                        <Search />
                    </div>
                </Modal>
            </div>
    
    )
  }
}
