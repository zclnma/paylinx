import React,{Component,Fragment} from 'react'
import MediaQuery from 'react-responsive';

import PaymentIMG from '../images/icon_payment.png';
import SecurityIMG from '../images/icon_security.png';
import MediaIMG from '../images/icon_media.png';
import MarketingIMG from '../images/icon_marketing.png';
import Marketingboost from './subicons/icon_marketing_boost.png';
import Marketinggeo from './subicons/icon_marketing_geo.png';
import Marketingtraffic from './subicons/icon_marketing_traffic.png';
import Mediachannel from './subicons/icon_media_channel.png';
import Mediaexposure from './subicons/icon_media_exposure.png';
import Mediasubscribers from './subicons/icon_media_subscribers.png';
import Paymentcost from './subicons/icon_payment_cost.png';
import Paymentrate from './subicons/icon_payment_rate.png';
import Paymentsettlement from './subicons/icon_payment_settlement.png';
import Securitycharge from './subicons/icon_security_charge.png';
import Securityfraud from './subicons/icon_security_fraud.png';
import Securitylicense from './subicons/icon_security_license.png';

import './cards.css';

class Cards extends Component {
  state = {
    extPayment: false,
    extSecurity: false,
    extMedia: false,
    extMarketing: false,
  }

  mouseenterHandler = (type) => {
    switch (type) {
      case 'payment':
        this.setState({extPayment: true})
        console.log('onmouse enter1')
        break;
      case 'security':
        this.setState({extSecurity: true})
        console.log('onmouse enter2')
        break;
      case 'media':
        this.setState({extMedia: true})
        console.log('onmouse enter3')
        break;
      case 'marketing':
        this.setState({extMarketing: true})
        console.log('onmouse enter4')
        break;
      default:
        break;
    }
  }

  mouseLeaveHandler = (type) => {
    switch (type) {
      case 'payment':
        this.setState({extPayment: false})
        console.log('onmouse leave1')
        break;
      case 'security':
        this.setState({extSecurity: false})
        console.log('onmouse leave2')
        break;
      case 'media':
        this.setState({extMedia: false})
        console.log('onmouse leave3')
        break;
      case 'marketing':
        this.setState({extMarketing: false})
        console.log('onmouse leave4')
        break;
      default:
        break;
    }
  }

  render() {
    let payment,security,media,marketing = null;

    payment = 
    <Fragment>
      <MediaQuery query="(min-width: 501px)">
        {!this.state.extPayment ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('payment')}>
        <img src={PaymentIMG} alt="" />
        <div styleName="lato-subtitle">Payment</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() => this.mouseLeaveHandler('payment')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Payment</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Paymentrate} alt="" />
            <div className="body">Lower rate than international credit cards</div>
          </div>
          <div styleName="icon">
            <img src={Paymentcost} alt="" />
            <div className="body">Cost effective</div>
          </div>
          <div styleName="icon">
            <img src={Paymentsettlement} alt="" />
            <div className="body">Free settlement</div>
          </div>
        </div>
    </div>}
    </MediaQuery>
    <MediaQuery query="(max-width: 500px)">
    <div styleName="card">
        <div styleName="orange"></div>
        <div styleName="lato-title">Payment</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Paymentcost} alt="" />
            <div className="body">Cost effective</div>
          </div>
          <div styleName="icon">
            <img src={Paymentrate} alt="" />
            <div className="body">Lower rate than international credit cards</div>
          </div>
          <div styleName="icon">
            <img src={Paymentsettlement} alt="" />
            <div className="body">Free settlement</div>
          </div>
        </div>
    </div>
    </MediaQuery>
    </Fragment>
    security = 
    <Fragment>
    <MediaQuery query="(min-width: 501px)">
    {!this.state.extSecurity ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('security')}>
        <img src={SecurityIMG} alt="" />
        <div styleName="lato-subtitle">Security</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('security')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Security</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Securitycharge} alt="" />
            <div className="body">No Chargebacks</div>
          </div>
          <div styleName="icon">
            <img src={Securityfraud} alt="" />
            <div className="body">Fraud protection</div>
          </div>
          <div styleName="icon">
            <img src={Securitylicense} alt="" />
            <div className="body">Australian Financial service license</div>
          </div>
        </div>
    </div>}
    </MediaQuery>
    <MediaQuery query="(max-width: 500px)">
    <div styleName="card">
        <div styleName="orange"></div>
        <div styleName="lato-title">Security</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Securitycharge} alt="" />
            <div className="body">No Chargebacks</div>
          </div>
          <div styleName="icon">
            <img src={Securityfraud} alt="" />
            <div className="body">Fraud protection</div>
          </div>
          <div styleName="icon">
            <img src={Securitylicense} alt="" />
            <div className="body">Australian Financial service license</div>
          </div>
        </div>
    </div>
    </MediaQuery>
    </Fragment>
    media = 
    <Fragment>
    <MediaQuery query="(min-width: 501px)">
    {!this.state.extMedia ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('media')}>
        <img src={MediaIMG} alt="" />
        <div styleName="lato-subtitle">Media</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('media')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Media</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Mediachannel} alt="" />
            <div className="body">200+ media channels offshore</div>
          </div>
          <div styleName="icon">
            <img src={Mediaexposure} alt="" />
            <div className="body">Exposure</div>
          </div>
          <div styleName="icon">
            <img src={Mediasubscribers} alt="" />
            <div className="body">160,000+ subscribers in Australia</div>
          </div>
        </div>
    </div>}
    </MediaQuery>
    <MediaQuery query="(max-width: 500px)">
    <div styleName="card">
        <div styleName="orange"></div>
        <div styleName="lato-title">Media</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Mediachannel} alt="" />
            <div className="body">200+ media channels offshore</div>
          </div>
          <div styleName="icon">
            <img src={Mediaexposure} alt="" />
            <div className="body">Exposure</div>
          </div>
          <div styleName="icon">
            <img src={Mediasubscribers} alt="" />
            <div className="body">160,000+ subscribers in Australia</div>
          </div>
        </div>
    </div>
    </MediaQuery>
    </Fragment>
    marketing = 
    <Fragment>
    <MediaQuery query="(min-width: 501px)">
    {!this.state.extMarketing ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('marketing')}>
        <img src={MarketingIMG} alt="" />
        <div styleName="lato-subtitle">Marketing</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('marketing')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Marketing</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Marketingboost} alt="" />
            <div className="body">Boost your brand in Chinese social-media</div>
          </div>
          <div styleName="icon">
            <img src={Marketinggeo} alt="" />
            <div className="body">Geo-Targeting</div>
          </div>
          <div styleName="icon">
            <img src={Marketingtraffic} alt="" />
            <div className="body">Increase traffic</div>
          </div>
        </div>
    </div>}
    </MediaQuery>
    <MediaQuery query="(max-width: 500px)">
    <div styleName="card">
        <div styleName="orange"></div>
        <div styleName="lato-title">Marketing</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={Marketingboost} alt="" />
            <div className="body">Boost your brand in Chinese social-media</div>
          </div>
          <div styleName="icon">
            <img src={Marketinggeo} alt="" />
            <div className="body">Geo-Targeting</div>
          </div>
          <div styleName="icon">
            <img src={Marketingtraffic} alt="" />
            <div className="body">Increase traffic</div>
          </div>
        </div>
    </div>
    </MediaQuery>
    </Fragment>
    return (
      <div styleName="cards">
          {payment}
          {marketing}
          {media}
          {security}        
      </div>
    )
  }
}

export default Cards;