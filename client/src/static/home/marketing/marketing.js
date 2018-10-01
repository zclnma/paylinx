import React,{Fragment} from 'react';
import style from './marketing.css';
import MarketingImg from '../images/img_marketing.jpg';
import MediaImg from '../images/img_media.jpg';
export default () => {
  return (
    <Fragment>
      <div className={style.container}>
        <div style={{position:'absolute', width:'50%',height:'100%'}}>
          <div className={style.contentContainer}> 
            <div className={style.orange}></div>
            <div className={style.Latoh2}>Marketing Solutions</div>
            <div className={style.SourceB}>You can showcase your products through an in-app shop. Making simple and easy for customers to purchase your products through a “one-click-payment”, although they are back in China. Our marketing services gather the essentials to attract Chinese customers to your businesses.</div>
            <div className={style.SourceB}>Although some people might see all these services and platforms a bit far, reality is that it’s already happening. I’m going to show how it would be the encounter between Chinese consumers and Merchants in South Australia through Paylinx and WeChat.</div>
            <div className={style.SourceB}>
              <ul style={{padding:'20px'}}>
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
        <div style={{position:'absolute', right:'0', width:'50%',height:'100%',backgroundColor:'rgba(51, 51, 51, 0.5)'}}>
        </div>
        <img src={MarketingImg} alt="" />
      </div>
      <div className={style.container}>
        <div style={{position:'absolute', width:'50%',height:'100%',backgroundColor:'rgba(51, 51, 51, 0.5)'}}>
          
        </div>
        <div style={{position:'absolute', right:'0', width:'50%',height:'100%'}}>
          <div className={style.contentContainer}>
            <div className={style.orange}></div>
            <div className={style.Latoh2}>Media Solutions</div>
            <div className={style.SourceB}>Australia News is an innovative digital media company taking advantage of the boost of WeChat to spread the news to thousands of users</div>
            <div className={style.SourceB}>We collect and inquire into daily breaking news with unique perspectives and professionalism, which has rapidly attracted thousands and thousands of subscribers. We provide excellent reading experience to our users by various media forms, distinctive insights, and a focus on public voices. Australia News is under Tencent and is the first WeChat Official Account Tencent opened in Australia. Australia News provides advertising, marketing, featured articles and exposure to Paylinx merchants to boost their brand among the more than 200,000 subscribers that the media company has.</div>
          </div>
        </div>
          <img src={MediaImg} alt="" />
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.FlipBox}>
            <div className={style.FlipFront}>
                <div className={style.orangeLong}></div>
                <div className={style.flixBoxCenter}>1.3M+</div>
                <div className={style.flixBoxBottom}>Chinese visitors to Australia in 2017</div>
            </div>
            <div className={style.FlipBack}>
                <div className={style.flixBoxBackContent}><div>More than</div><div style={{fontSize:'2.4rem'}}>185K</div> Chinese Students at any given time</div>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.FlipBox}>
            <div className={style.FlipFront}>
                <div className={style.orangeLong}></div>
            </div>
            <div className={style.FlipBack}>
                FlipBox
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.FlipBox}>
            <div className={style.FlipFront}>
                <div className={style.orangeLong}></div>
            </div>
            <div className={style.FlipBack}>
                FlipBox
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.FlipBox}>
            <div className={style.FlipFront}>
                <div className={style.orangeLong}></div>
            </div>
            <div className={style.FlipBack}>
                FlipBox
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
