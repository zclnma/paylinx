import React from 'react';
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Alipay from './images/logo_Alipay.png';
import WechatPay from './images/logo_WeChat Pay.png';
import Cards from './cards/cards';
import Solutions from './solutions/solution';
import Marketing from './marketing/marketing';

import style from './Home.css';
import {Layout} from 'antd';

const {Content} = Layout;

export default class App extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <Banner />
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
          <Solutions />
          <Marketing />
        </Content>
        <Footer />
      </Layout>
    )
  }
}