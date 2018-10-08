import React from 'react';
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Alipay from './images/logo_Alipay.png';
import WechatPay from './images/logo_WeChat Pay.png';
import Cards from './cards/cards';
import Solutions from './solutions/solution';
import Marketing from './marketing/marketing';

import './Home.css';
import {Layout} from 'antd';

const {Content} = Layout;

export default class App extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <Banner />
          <div styleName="container">
            <span styleName="lato-title">Paylinx services help your business</span>
            <div style={{marginBottom: '40px', width:'355px',margin:'auto'}} className="body">
              paylinx is committed to delivering advanced solutions which provide professional and secure payment acceptance models.
            </div>
            <div styleName="logoContainer">
              <img src={WechatPay} alt="" />
              <img src={Alipay} alt="" />
            </div>
            <Cards />
          </div>
          <Solutions />
          <Marketing />
        </Content>
        <Footer />
      </Layout>
    )
  }
}