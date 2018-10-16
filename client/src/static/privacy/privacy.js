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
          <div style={{textAlign:'center'}}styleName="lato-title">Privacy Policy</div>
          <div className="body">Our relationship with the Merchant is governed by two documents: the Merchant Application and these general terms (together “Agreement”). They should be read together and become binding on both parties immediately upon approval of the Application.
Agreement between the Merchant (herein after referred to as “Merchant”) and Paylinx Pty Ltd (ABN 97 610 301 516) of Suite 2903, 31 Market Street, Sydney NSW 2000 (herein after referred to as “Paylinx”) in accordance with section 127 of the Corporations Act 2001.</div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}
