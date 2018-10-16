import React from 'react'
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {Layout} from 'antd';
import Presentation from './presentation/presentation';
//import Myer from './myer/myer';
//import Innisfree from './innisfree/innisfree';
//import Star from './star/star';
const {Content} = Layout;

export default () => {
  return (
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
  )
}
