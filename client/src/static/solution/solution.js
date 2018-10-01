import React from 'react'
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Wechat from './wechat/wechat';
import Alipay from './alipay/alipay';
import Tailor from './tailor/tailor';
import {Layout} from 'antd';

const {Content} = Layout;

export default () => {
  return (
    <Layout>
      <Header />
      <Content >
        <Banner />
        <Wechat />
        <Alipay />
        <Tailor />
      </Content>
      <Footer />
    </Layout>
  )
}