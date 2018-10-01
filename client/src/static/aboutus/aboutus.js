import React from 'react'
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import style from './aboutus.css';
import Banner from './banner/banner';
import Services from './iconBar/iconBar';
import Change from './images/icon_change.png';
import Security from './images/icon_security.png';
import Premium from './images/icon_premium.png';
import {Layout, Card} from 'antd';

const {Content} = Layout;

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Banner />
        <div className={style.container} style={{backgroundColor:'white'}} id='industry'>
            <span className={style.Latoh2}>Industry we serve</span>
            <div className={style.SourceB}>Let us help you bring your brand to life by providing your business the tools to Attract, Engage, and Convert your products and services into real dollars. Speak to Paylinx today about how we can connect your business to the WeChat and Alipay ecosystems. Nowhere else in the marketplace will you be able to access such a unique offering as the Paylinx solution, providing Australian business the opportunity to create a platform of engagement linking it to the Chinese consumer.</div>
              <Services />
            <div className={style.SourceB}>Paylinx can also offer your business a unique opportunity to develop your Chinese client base with a social media reach comprising of up to 200 partner media channels in China, accompanied with our in-house social media resources currently reaching more than 600,000 Chinese in Australia to further enhance your brands presence in the market place.</div>
        </div>
        <div className={style.container} id='story'>
          <span className={style.Latoh2} >Our Story</span>
          <div style={{width: '80%', margin:'auto'}}>
            <div className={style.SourceB}>The Paylinx group with its offices in Melbourne and Sydney was founded in January 2016 to compliment the robust relationship that founders Kaixuan (Tony) Shu and Qiao (Joseph) Zhang had already forged with Tencent (WeChat’s parent company) as the individuals responsible on behalf of the Chinese behemoth to introduce WeChat to the Australian market in 2012.</div>
            <br />
            <div className={style.SourceB}>Paylinx to date has secured licenses with WeChat Pay and Alipay and is an acquirer of these services to Australian merchants who wish to avail themselves of the opportunities through the payment platforms. Paylinx also provides merchants with access to the implementation within their business of a “Registered and Verified Official Service Account” and a “Mini-Program” providing for a life-long relationship with the customer in your Australian Legal Entities name without the need for Chinese companies to act on your behalf.</div>
            <br />
            <div className={style.SourceB}>Today, we are proud that our offering is the only one of its kind available in the Australian marketplace incorporating a payment and digital solution that link to provide the best customer engagement platform to our merchant base.</div>
          </div>
        </div>
        <div className={style.container} id='value' style={{backgroundColor:'white'}}>
          <span className={style.Latoh2}>Our Values</span>
          <div style={{width:'80%',margin:"auto",display:"flex"}}>
            <Card
              style={{width: '250px', margin:'auto', height: '350px'}}
              bordered={false}
              cover={<div className={style.card}>
                      <img src={Change} alt="" />
                      <div className={style.Latoh2}>CHANGE</div>
                    </div>}>
              <div className={style.SourceB}>Paylinx stands within the WeChat ecosystem, changing the way of purchasing for customers, turning the society into a cashless society.</div>
            </Card>
            <Card
              style={{width: '250px', margin:'auto', height: '350px'}}
              bordered={false}
              cover={<div className={style.card}>
                      <img src={Security} alt="" />
                      <div className={style.Latoh2}>SECURITY</div>
                    </div>}>
              <div className={style.SourceB}>We believe that security and transparency go together and therefore we focus on providing to the merchant as many insights and data as possible. </div>
            </Card>
            <Card
              style={{width: '250px', margin:'auto', height: '350px'}}
              bordered={false}
              cover={<div className={style.card}>
                      <img src={Premium} alt="" />
                      <div className={style.Latoh2}>PREMIUM</div>
                    </div>}>
              <div className={style.SourceB}>We offer high-quality services to empower our clients in the market with Payment, Marketing and Media Solutions.</div>
            </Card>        
          </div>
          <div style={{padding: '40px', width: '80%', margin:'auto', marginTop:'40px'}}>
            <div className={style.orange} style={{marginBottom:'15px'}}></div>
            <div className={style.SourceB}>Our focus is on providing premium quality services and making payments easy, simple and highly secure between Australian merchants and Chinese customers.</div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>

  )
}
