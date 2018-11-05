import React from 'react'
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Wechat from './wechat/wechat';
import Alipay from './alipay/alipay';
import Tailor from './tailor/tailor';
import {Layout} from 'antd';
import {Helmet} from 'react-helmet';

const {Content} = Layout;

export default () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="Solution" content="Let us help you bring your brand to life by providing your business with the tools to Attract, Engage, and Convert your products and services into real dollars connecting with Chinese consumers. Paylinx works with WeChat Pay and Alipay services, the main mobile payment services." />
        <title>Paylinx - Solution</title>
        <link rel="canonical" href="http://www.paylinx.com.au/solution" />
    </Helmet>
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
    </div>
  )
}