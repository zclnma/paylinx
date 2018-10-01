import React,{Fragment} from 'react'
import style from './cards.css';
import Payment from '../../images/icon_payment.png';
import Security from '../../images/icon_security.png';
import Media from '../../images/icon_payment.png';
import Marketing from '../../images/icon_marketing.png';
import {Card} from 'antd';
export default () => {
  return (
    <div className={style.cards}>
        <Card
              style={{width: '180px', margin:'auto'}}
              cover={<div className={style.card}>
                      <img src={Payment} alt="" />
                      <div className={style.Latoh3}>Payment</div>
                    </div>}>
        </Card>
        <Card
              style={{width: '180px', margin:'auto'}}
              cover={<div className={style.card}>
                      <img src={Security} alt="" />
                      <div className={style.Latoh3}>Security</div>
                    </div>}>
        </Card>
        <Card
              style={{width: '180px', margin:'auto'}}
              cover={<div className={style.card}>
                      <img src={Media} alt="" />
                      <div className={style.Latoh3}>Media</div>
                    </div>}>
        </Card>
        <Card
              style={{width: '180px', margin:'auto'}}
              cover={<div className={style.card}>
                      <img src={Marketing} alt="" />
                      <div className={style.Latoh3}>Marketing</div>
                    </div>}>
        </Card>
    </div>
  )
}
