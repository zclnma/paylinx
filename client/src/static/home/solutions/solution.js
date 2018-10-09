import React,{Component,Fragment} from 'react'
import {Icon} from 'antd';
import QueueAnim from 'rc-queue-anim';
import MediaQuery from 'react-responsive';

import Online from '../images/img_online.jpg';
import InStore from '../images/img_inStore.jpg';
import Alipay from '../images/logo_Alipay.png';
import WechatPay from '../images/logo_WeChat Pay.png';
import onlineIcon from '../images/icon_online.png';
import offlineIcon from '../images/icon_offline.png';
import Modal from '../../../component/Modal/Modal';

import './solution.css';

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
    online = 
    <Fragment>
      <MediaQuery query="(min-device-width: 501px)">
      {this.state.OnlineHover ? 
          <div 
            styleName="shadow"
            onClick = {() => this.modalShowHandler('online')}
            >
            <QueueAnim 
            className="demo-content"
            animConfig={[
                { opacity: [1, 0], translateY: [0, 100] },
                { opacity: [1, 0], translateY: [0, -100] }]}>
              <div key="1"><img src={onlineIcon} alt='' /></div>
              <div key="2" styleName="lato-title">Online</div>
              <div key="3" styleName="lato-subtitle">Start accepting payments online to boost your business among Chinese</div>
            </QueueAnim>
          </div> : null}
      </MediaQuery>
      <MediaQuery query="(max-device-width: 500px)">
        <div styleName="shadow">
          <div><img src={onlineIcon} alt='' /></div>
          <div styleName="lato-title">Online</div>
          <div styleName="lato-subtitle">Start accepting payments online to boost your business among Chinese</div>
        </div>
      </MediaQuery>
    </Fragment>

  instore = 
    <Fragment>
    <MediaQuery query="(min-device-width: 501px)">
      {this.state.InStoreHover ? 
          <div 
            styleName="shadow"
            onClick = {() => this.modalShowHandler('instore')}
            >
            <QueueAnim
            className="demo-content"
            animConfig={[
                { opacity: [1, 0], translateY: [0, 100] },
                { opacity: [1, 0], translateY: [0, -100] }]}>
            <div key="1"><img src={offlineIcon} alt='' /></div>
            <div key="2"styleName="lato-title">In-store</div>
            <div key="3"styleName="lato-subtitle">Be present on the Chinese mindsets accepting their prefered payment options</div>
            </QueueAnim>
          </div> : null}
    </MediaQuery>
    <MediaQuery query="(max-device-width: 500px)">
      <div styleName="shadow">
        <div key="1"><img src={offlineIcon} alt='' /></div>
        <div key="2"styleName="lato-title">In-store</div>
        <div key="3"styleName="lato-subtitle">Be present on the Chinese mindsets accepting their prefered payment options</div>
      </div>
    </MediaQuery>
  </Fragment>
    return (
      <div styleName="container1">
      <span styleName="lato-title">Payment Solutions</span>
      <div styleName="description" className="body">
        Paylinx is committed to delivering advanced solutions which provide professional and secure payment acceptance models.
      </div>
      <div styleName="logoContainer">
        <img src={Alipay} alt="" />
        <img src={WechatPay} alt="" />
      </div>
      <div styleName="solutions">
        <div styleName="solution"
          onMouseEnter={() => this.mouseEnterHandler('online')}
          onMouseLeave={() => this.mouseLeaveHandler('online')}>
          {online}
          <div styleName="image">
            <img src={Online} alt="" />
          </div>
        </div>
        <div styleName="solution"
            onMouseEnter={() => this.mouseEnterHandler('instore')}
            onMouseLeave={() => this.mouseLeaveHandler('instore')}>
            {instore}
            <div styleName="image">
              <img src={InStore} alt="" />
            </div>
        </div>
      </div>
      <Modal
          show={this.state.OnlineModal}
          modalClosed={() => this.modalHideHandler('online')}>
          <div styleName="modalContainer">
            <span onClick={this.hideModal} style={{cursor:'pointer'}}>
              <Icon 
                  style={{fontSize: '40px', position:'absolute', right: '40px', top: '40px', zIndex:'1'}} 
                  type="close" 
                  theme="outlined" /></span>
          </div>
      </Modal>
      <Modal
          show={this.state.InStoreModal}
          modalClosed={() => this.modalHideHandler('instore')}>
          <div styleName="modalContainer">
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