import React,{Component} from 'react'
import style from './cards.css';
import PaymentIMG from '../images/icon_payment.png';
import SecurityIMG from '../images/icon_security.png';
import MediaIMG from '../images/icon_payment.png';
import MarketingIMG from '../images/icon_marketing.png';

class Cards extends Component {
  state = {
    extPayment: false,
    extSecurity: false,
    extMedia: false,
    extMarketing: false,
  }

  mouseenterHandler = () => {
    this.setState({extPayment: true})
    console.log('onmouse enter')
  }

  mouseLeaveHandler = () => {
    this.setState({extPayment: false})
    console.log('on mouse leave')
  }

  render() {
    let payment,security,media,marketing = null;

    payment = 
    !this.state.extPayment ? 
      <div className={style.card}
          onMouseEnter = {this.mouseenterHandler}>
        <img src={PaymentIMG} alt="" />
        <div className={style.Latoh3}>Payment</div>
    </div> : 
    <div className={style.card}
          onMouseLeave={this.mouseLeaveHandler}>
        <div className={style.orange}></div>
        <div className={style.Latoh2}>Payment</div>
        <div className={style.icons}>
          <div className={style.icon}>
            <img src={PaymentIMG} alt="" />
            <div className={style.Latoh3}>Some words</div>
          </div>
          <div className={style.icon}>
            <img src={PaymentIMG} alt="" />
            <div>Some words</div>
          </div>
          <div className={style.icon}>
            <img src={PaymentIMG} alt="" />
            <div>Some words</div>
          </div>
          <div className={style.icon}>
            <img src={PaymentIMG} alt="" />
            <div>Some words</div>
          </div>
        </div>
    </div>
    return (
      <div className={style.cards}>
          {payment}
          <div className={style.card}>
            <img src={SecurityIMG} alt="" />
            <div className={style.Latoh3}>Security</div>
          </div>
          <div className={style.card}>
            <img src={MediaIMG} alt="" />
            <div className={style.Latoh3}>Media</div>
          </div>
          <div className={style.card}>
            <img src={MarketingIMG} alt="" />
            <div className={style.Latoh3}>Marketing</div>
          </div>
          
      </div>
    )
  }
}

export default Cards;