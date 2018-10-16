import React from 'react';

import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';

import {Layout} from 'antd';

import './privacy.css';

const {Content} = Layout;

export default function privacy() {
  return (
    <Layout>
      <Header />
      <Content>
        <div styleName="container">
          <div styleName="lato-title">Privacy Policy</div>
          <div className="body"></div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}
