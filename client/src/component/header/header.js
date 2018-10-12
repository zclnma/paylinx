import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom';
import {Menu, Dropdown} from 'antd';
import MediaQuery from 'react-responsive';

import Modal from '../Modal/Modal';
import Search from './searchBar/searchBar';
import MenuList from '../menus';

import close from './images/icon_close.png';
import closeWhite from './images/icon_closeWhite.png';
import Logo from './images/logo_orange.png';
import MenuIcon from './images/icon_burgerMenu4.png';
import MenuIconMobile from './images/icon_burgerMenu.png';
import SearchIcon from './images/icon_search.png';
import UserIcon from './images/icon_user2.png';
import Menus from './menus/menu';

import './header.css';

class Header extends Component {
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
            <Menu.Divider />
            <Menu.Item key="3">
            <a style={{ color:'rgba(0, 0, 0, 0.65)'}} href="http://paylinx.cn/doc/index.html">API Documents (CN)</a>
            </Menu.Item>
            <Menu.Item key="4">
            <a style={{ color:'rgba(0, 0, 0, 0.65)'}} href="http://paylinx.cn/doc/en/index.html">API Documents (EN)</a>
            </Menu.Item>
        </Menu>
    );

    return (
            <div styleName="header">
                <div styleName="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <MediaQuery query="(min-width: 501px)">
                {this.props.location.pathname === '/' ? 
                    <div styleName="navItemHome">
                        <div styleName="icon" onClick={this.showModal}> 
                            <img src={MenuIcon} alt="" />
                        </div>
                        <div styleName="icon"> 
                            <Dropdown overlay={userMenu}>
                                <img src={UserIcon} alt="" />
                                </Dropdown>
                        </div>
                        <div styleName="icon" onClick={this.showSearch}> 
                            <img src={SearchIcon} alt="" />
                        </div>
                    </div> :
                    <div styleName="navItem">
                        <div styleName="getInTouchContainer">
                            <div styleName="getInTouch">
                                <Link to='/contact-us' 
                                    style={{ color:'white'}}> 
                                    GET IN TOUCH
                                </Link></div>
                            </div>
                        <div styleName="icon" onClick={this.showModal}> 
                            <img src={MenuIcon} alt="" />
                        </div>
                        <div styleName="icon"> 
                            <Dropdown overlay={userMenu}>
                                <img src={UserIcon} alt="" />
                                </Dropdown>
                        </div>
                        <div styleName="icon" onClick={this.showSearch}> 
                            <img src={SearchIcon} alt="" />
                        </div>
                    </div>
                }
                </MediaQuery>
                <MediaQuery query="(max-width: 500px)">
                <div styleName="navItem">
                    <div styleName="icon" onClick={this.showModal}> 
                        <img src={MenuIconMobile} alt="" />
                    </div>
                    <div styleName="icon" onClick={this.showSearch}> 
                        <img src={SearchIcon} alt="" />
                    </div>
                </div>
                </MediaQuery>
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.hideModal}>
                    <div styleName="modalContainer">
                        <span styleName="close" 
                            onClick={this.hideModal} 
                            style={{cursor:'pointer'}}>
                            <img src={closeWhite} alt=""/>
                        </span>
                            <Menus 
                                image={MenuList.aboutUs.image}
                                title={MenuList.aboutUs.title}
                                link={MenuList.aboutUs.link}
                                data={MenuList.aboutUs.menu}
                                color={MenuList.aboutUs.color}
                                closed={this.hideModal}
                                />
                            <Menus 
                                image={MenuList.solution.image}
                                title={MenuList.solution.title}
                                link={MenuList.solution.link}
                                data={MenuList.solution.menu}
                                color={MenuList.solution.color}
                                closed={this.hideModal}
                                />
                            <Menus 
                                image={MenuList.caseStudy.image}
                                title={MenuList.caseStudy.title}
                                link={MenuList.caseStudy.link}
                                data={MenuList.caseStudy.menu}
                                color={MenuList.caseStudy.color}
                                closed={this.hideModal}
                                />
                            <Menus 
                                image={MenuList.contactUs.image}
                                title={MenuList.contactUs.title}
                                link={MenuList.contactUs.link}
                                data={MenuList.contactUs.menu}
                                color={MenuList.contactUs.color}
                                closed={this.hideModal}
                                />
                            <Menus 
                                image={MenuList.login.image}
                                title={MenuList.login.title}
                                link={MenuList.login.link}
                                data={MenuList.login.menu}
                                color={MenuList.login.color}
                                closed={this.hideModal}
                                />
                    </div>
                </Modal>
                <Modal
                    show={this.state.showSearch}
                    modalClosed={this.hideSearch}>
                    <div styleName="modalContainer">
                        <span styleName="close" 
                            onClick={this.hideSearch} 
                            style={{cursor:'pointer'}}>
                            <img src={close} alt=""/>
                        </span>
                        <Search />
                    </div>
                </Modal>
            </div>
    
    )
  }
}

export default withRouter(Header);