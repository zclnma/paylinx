import React from 'react'
import './ContactUs.css';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Banner from './banner/banner';
import Form from './form/form';
import Map from './map/map';
import {Layout} from 'antd';

const {Content} = Layout;

export default () => {
  return (
      <Layout>
        <Header />
        <Content >
          <Banner />
          <div styleName="form">
            <div style={{textAlign: 'center',marginBottom:'5px'}} styleName="lato-title">We’d love to hear from you!</div>
            <div style={{textAlign: 'center',marginBottom:'10px'}} className="body">Fill in the form below and we’ll get back to you within 24 hours.</div>
            <Form />
          </div>
          <Map />
          {/*<Download />*/}
        </Content>
        <Footer />
      </Layout>
  )
}
