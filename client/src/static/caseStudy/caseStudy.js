import React from 'react'
import Banner from './banner/banner';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Myer from './myer/myer';
import Innisfree from './innisfree/innisfree';
import Star from './star/star';
import {Layout} from 'antd';

const {Content} = Layout;

export default () => {
  return (
    <Layout>
      <Header />
      <Content >
        <Banner />
        <Myer />
        <Innisfree />
        <Star />
      </Content>
      <Footer />
    </Layout>
  )
}
