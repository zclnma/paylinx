import React,{Component} from 'react'

import PaymentIMG from '../images/icon_payment.png';
import SecurityIMG from '../images/icon_security.png';
import MediaIMG from '../images/icon_payment.png';
import MarketingIMG from '../images/icon_marketing.png';

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
        console.log('onmouse enter')
        break;
      case 'security':
        this.setState({extSecurity: true})
        console.log('onmouse enter')
        break;
      case 'media':
        this.setState({extMedia: true})
        console.log('onmouse enter')
        break;
      case 'marketing':
        this.setState({extMarketing: true})
        console.log('onmouse enter')
        break;
      default:
        break;
    }
  }

  mouseLeaveHandler = (type) => {
    switch (type) {
      case 'payment':
        this.setState({extPayment: false})
        console.log('onmouse enter')
        break;
      case 'security':
        this.setState({extSecurity: false})
        console.log('onmouse enter')
        break;
      case 'media':
        this.setState({extMedia: false})
        console.log('onmouse enter')
        break;
      case 'marketing':
        this.setState({extMarketing: false})
        console.log('onmouse enter')
        break;
      default:
        break;
    }
  }

  render() {
    let payment,security,media,marketing = null;

    payment = 
    !this.state.extPayment ? 
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
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
        </div>
    </div>

    security = 
    !this.state.extSecurity ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('security')}>
        <img src={PaymentIMG} alt="" />
        <div styleName="lato-subtitle">Security</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('security')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Security</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
        </div>
    </div>

    media = 
    !this.state.extMedia ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('media')}>
        <img src={PaymentIMG} alt="" />
        <div styleName="lato-subtitle">Media</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('media')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Media</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
        </div>
    </div>

    marketing = 
    !this.state.extMarketing ? 
      <div styleName="card"
          onMouseEnter = {() =>this.mouseenterHandler('marketing')}>
        <img src={PaymentIMG} alt="" />
        <div styleName="lato-subtitle">Marketing</div>
    </div> : 
    <div styleName="card"
          onMouseLeave={() =>this.mouseLeaveHandler('marketing')}>
        <div styleName="orange"></div>
        <div styleName="lato-title">Marketing</div>
        <div styleName="icons">
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
          <div styleName="icon">
            <img src={PaymentIMG} alt="" />
            <div className="body">Some words</div>
          </div>
        </div>
    </div>

    return (
      <div styleName="cards">
          {payment}
          {security}
          {media}
          {marketing}
      </div>
    )
  }
}

export default Cards;