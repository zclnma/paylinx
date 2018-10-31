import React from 'react'
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {Layout} from 'antd';
import Presentation from './presentation/presentation';
import {Helmet} from 'react-helmet';
//import Myer from './myer/myer';
//import Innisfree from './innisfree/innisfree';
//import Star from './star/star';
const {Content} = Layout;

export default () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Paylinx - Our Clients</title>
        <link rel="canonical" href="http://www.paylinx.com.au/case-study" />
    </Helmet>
    <Layout>
      <Header />
      <Content >
        <Banner />
        {/*<Myer />
        <Innisfree />
        <Star />*/}
        <Presentation />
      </Content>
      <Footer />
    </Layout>
    </div>
  )
}
