import React,{Fragment} from 'react';
import MediaQuery from 'react-responsive';

import MarketingImg from '../images/img_marketing.jpg';
import MediaImg from '../images/img_media.jpg';
import News from '../images/img_australiaNews.png';
import flip2 from '../images/flipbox/img_flipCards-02.png';
import flip3 from '../images/flipbox/img_flipCards-03.png';
import flip4 from '../images/flipbox/img_flipCards-04.png';
import flip5 from '../images/flipbox/img_flipCards-05.png';
import flip6 from '../images/flipbox/img_flipCards-06.png';
import flip7 from '../images/flipbox/img_flipCards-07.png';
import flip8 from '../images/flipbox/img_flipCards-08.png';
import flip9 from '../images/flipbox/img_flipCards-09.png';

import './marketing.css';

export default () => {
  return (
    <Fragment>
      <div styleName="container">
        <div styleName="marketing">
          <div styleName="contentContainer"> 
            <div styleName="orange"></div>
            <div styleName="content">
              <div styleName="lato-title">Marketing Solutions</div>
              <div>
              <div className="body">You can showcase your products through an in-app shop. Making simple and easy for customers to purchase your products through a “one-click-payment”, although they are back in China. Our marketing services gather the essentials to attract Chinese customers to your business.</div>
              <div className="body">The best way to be known and have presence among Chinese customers is being visible in the number one Chinese social media app, WeChat. Paylinx provides the solution for the exposure, creating a WeChat Official account. Creating the account gives merchants the chance to advertise and promote their businesses in the Chinese social app. Boost your social media presence over 1 billion Chinese monthly active users. Having your brands’ image linked to a verified WeChat official account registered in your trading legal entities name, gives potential customers confidence. </div>
              <div className="body">
                <ul>
                  <li>CRM</li>
                  <li>Geo-Targeting</li>
                  <li>Content Translation</li>
                  <li>Content Management</li>
                  <li>Global Shopper Initiatives</li>
                  <li>WeChat Moments Advertising</li>
                  <li>Customer Experience Management</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        <MediaQuery query="(min-width: 501px)">
          <div style={{position:'absolute', right:'0', width:'50%',height:'100%',backgroundColor:'rgba(51, 51, 51, 0.5)'}}>
            <div styleName="big-logo">
              <div className="lato-oversize">Exposure</div>
              <div styleName="lato-oversize">Engagement</div>
              <div className="lato-oversize">Growth.</div>
            </div>
          </div>
        </MediaQuery>
        <img src={MarketingImg} alt="" />
      </div>
      <div styleName="container">
        <MediaQuery query="(min-width: 501px)">
          <div style={{position:'absolute', width:'50%',height:'100%',backgroundColor:'rgba(51, 51, 51, 0.5)'}}>
            <div styleName="big-logo">
              <div className="lato-oversize">Reach</div>
              <div styleName="lato-oversize">Connect</div>
              <div className="lato-oversize">Take off.</div>
            </div>
          </div>
        </MediaQuery>
        <div styleName="media">
          <div styleName="contentContainer">
            <div styleName="orange"></div>
            <div styleName="content">
            <div styleName="lato-title">Media Solutions</div>
            <div className="body">Australia News is an innovative digital media company taking advantage of the boost of WeChat to spread the news to thousands of users</div>
            <img src={News} alt="" />
            <div className="body">We collect and inquire into daily breaking news with unique perspectives and professionalism, which has rapidly attracted thousands and thousands of subscribers. We provide excellent reading experience to our users by various media forms, distinctive insights, and a focus on public voices. Australia News is under Tencent and is the first WeChat Official Account Tencent opened in Australia. Australia News provides advertising, marketing, featured articles and exposure to Paylinx merchants to boost their brand among the more than 200,000 subscribers that the media company has.</div>
            </div>
          </div>
        </div>
          <img src={MediaImg} alt="" />
      </div>
      <div styleName="cards">
        <div styleName="card">
          <div styleName="FlipBox">
            <div styleName="FlipFront">
                <img src={flip2} alt="" />
            </div>
            <div styleName="FlipBack">
                <img src={flip3} alt="" />
            </div>
          </div>
        </div>
        <div styleName="card">
          <div styleName="FlipBox">
            <div styleName="FlipFront">
                <img src={flip4} alt="" />
            </div>
            <div styleName="FlipBack">
                <img src={flip5} alt="" />
            </div>
          </div>
        </div>
        <div styleName="card">
          <div styleName="FlipBox">
            <div styleName="FlipFront">
                <img src={flip6} alt="" />
            </div>
            <div styleName="FlipBack">
                <img src={flip7} alt="" />
            </div>
          </div>
        </div>
        <div styleName="card">
          <div styleName="FlipBox">
            <div styleName="FlipFront">
                <img src={flip8} alt="" />
            </div>
            <div styleName="FlipBack">
                <img src={flip9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
