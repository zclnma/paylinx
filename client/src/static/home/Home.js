import React from 'react';
import MediaQuery from 'react-responsive'
import LazyLoad from 'react-lazyload';

import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Alipay from './images/logo_Alipay.png';
import WechatPay from './images/logo_WeChat Pay.png';
import Cards from './cards/cards';
import Solutions from './solutions/solution';
import Marketing from './marketing/marketing';
import {Helmet} from "react-helmet";

import './Home.css';
import {Layout} from 'antd';

const {Content} = Layout;

export default class App extends React.Component {

  render() {
    return (
      <div>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Paylinx - Home</title>
              <link rel="canonical" href="http://www.paylinx.com.au/" />
          </Helmet>
      <Layout>
        <Header />
        <Content>
          <Banner />
          <div styleName="container">
            
            <MediaQuery query="(min-width: 501px)">
              <span styleName="lato-title">Paylinx services help your business</span>
              <div styleName="description" className="body">
              We are proud that our offering is the only one of its kind available in the Australian marketplace incorporating a payment and digital solution that link to provide the best customer engagement platform to our merchant base.
              </div>
              <div styleName="logoContainer">
                <img src={WechatPay} alt="" />
                <img src={Alipay} alt="" />
              </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 500px)">
              <span styleName="lato-title">Helping your business</span>
              <div styleName="description" className="body">
                We are proud that our offering is the only one of its kind available in the Australian marketplace incorporating a payment and digital solution.
              </div>
            </MediaQuery>
            <LazyLoad>
              <Cards />
            </LazyLoad>
          </div>
          <Solutions />
          <LazyLoad>
            <Marketing />
          </LazyLoad>
        </Content>
        <Footer />
      </Layout>
      </div>
    )
  }
}