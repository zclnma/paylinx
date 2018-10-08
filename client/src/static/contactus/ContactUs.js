import React from 'react'
import './ContactUs.css';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Banner from './banner/banner';
import Form from './form/form';
import Map from './map/map';
import Download from './download/download';
import {Layout,Card} from 'antd';

const {Content} = Layout;

export default () => {
  return (
      <Layout>
        <Header />
        <Content >
          <Banner />
          <div styleName="form">
            <div style={{textAlign: 'center', marginTop:'30px'}} styleName="lato-title">GET IN TOUCH</div>
            <Form />
          </div>
          <Map />
          {/*<Download />*/}
        </Content>
        <Footer />
      </Layout>
  )
}
