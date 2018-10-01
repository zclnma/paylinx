import React from 'react'
import style from './ContactUs.css';
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
          <div className={style.container}>
          <Banner />
          <Card
            bordered={false}
            style={{ width: '600px', margin: 'auto' }}>
            <Form />
          </Card>
          </div>
          <Map />
          <Download />
        </Content>
        <Footer />
      </Layout>
  )
}
