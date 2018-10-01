import React,{Component} from 'react'
import Online from '../images/img_online.jpg';
import InStore from '../images/img_inStore.jpg';
import Alipay from '../images/logo_Alipay.png';
import WechatPay from '../images/logo_WeChat Pay.png';
import ICON from '../images/icon_marketing.png';
import Modal from './Modal/Modal';
import style from './solution.css';

import {Icon} from 'antd';
import QueueAnim from 'rc-queue-anim';

class Solutions extends Component {
  state = {
    OnlineHover: false,
    InStoreHover: false,
    OnlineModal: false,
    InStoreModal: false,
  }

  mouseEnterHandler = (type) => {
    type === 'online' ?
      this.setState({OnlineHover: true}) :
      this.setState({InStoreHover: true});
  }
  mouseLeaveHandler = (type) => {
    type === 'online' ?
      this.setState({OnlineHover: false}) :
      this.setState({InStoreHover: false});
  }

  modalShowHandler = (type) => {
    type === 'online' ?
      this.setState({OnlineModal: true}) :
      this.setState({InStoreModal: true})
  }

  modalHideHandler = (type) => {
    type === 'online' ?
      this.setState({OnlineModal: false}) :
      this.setState({InStoreModal: false})
  }

  render (){

    let online = null;
    let instore = null;
    if (this.state.OnlineHover) {
      online = 
      <div 
        className={style.shadow}
        onClick = {() => this.modalShowHandler('online')}
        >
        <QueueAnim 
        className="demo-content"
        animConfig={[
            { opacity: [1, 0], translateY: [0, 100] },
            { opacity: [1, 0], translateY: [0, -100] }]}>
          <div key="1"><img src={ICON} alt='' /></div>
          <div key="2"className={style.Latoh2}>Online</div>
          <div key="3"className={style.Latoh3}>Start accepting payments online to boost your business among Chinese</div>
        </QueueAnim>
      </div>
    }

    if(this.state.InStoreHover) {
      instore = 
      <div 
        className={style.shadow}
        onClick = {() => this.modalShowHandler('instore')}
        >
        <div><img src={ICON} alt='' /></div>
        <div className={style.Latoh2}>Instore</div>
        <div className={style.Latoh3}>Be present on the Chinese mindsets accepting their prefered payment options</div>
      </div>
    }



    return (
      <div className={style.container1}>
      <span className={style.Latoh2}>Payment Solutions</span>
      <div style={{marginBottom: '40px', width:'60%',margin:'auto'}} className={style.SourceB}>
      Paylinx is committed to delivering advanced solutions which provide professional and secure payment acceptance models.
      </div>
      <div className={style.solutions}>
        <div className={style.solution} 
          onMouseEnter={() => this.mouseEnterHandler('online')}
          onMouseLeave={() => this.mouseLeaveHandler('online')}>
          {online}
          <div className={style.image}>
            <img src={Online} alt="" />
          </div>
        </div>
        <div className={style.solution}
            onMouseEnter={() => this.mouseEnterHandler('instore')}
            onMouseLeave={() => this.mouseLeaveHandler('instore')}>
            {instore}
            <div className={style.image}>
              <img src={InStore} alt="" />
            </div>
        </div>
      </div>
      <div className={style.logoContainer}>
        <img src={Alipay} alt="" />
        <img src={WechatPay} alt="" />
      </div>
      <Modal
          show={this.state.OnlineModal}
          modalClosed={() => this.modalHideHandler('online')}>
          <div className={style.modalContainer}>
            <span onClick={this.hideModal} style={{cursor:'pointer'}}>
              <Icon 
                  style={{fontSize: '40px', position:'absolute', right: '40px', top: '40px', zIndex:'1'}} 
                  type="close" 
                  theme="outlined" /></span>
              666
          </div>
      </Modal>
      <Modal
          show={this.state.InStoreModal}
          modalClosed={() => this.modalHideHandler('instore')}>
          <div className={style.modalContainer}>
            <span onClick={this.hideModal} style={{cursor:'pointer'}}>
              <Icon 
                  style={{fontSize: '40px', position:'absolute', right: '40px', top: '40px', zIndex:'1'}} 
                  type="close" 
                  theme="outlined" /></span>
              <div style={{width:'100%', height:'100%', backgroundColor:'white'}}>666</div>
          </div>
      </Modal>
    </div>
    )
  }
}

export default Solutions;