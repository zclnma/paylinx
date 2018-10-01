import React from 'react'
import style from './wechat.css';
import Wechat from '../images/logo_WeChat.png';
import WechatPay from '../images/logo_WeChat Pay.png';
import WechatPhone from '../images/img_3phones.png';
import Ma from  '../images/img_ma.png';
import Mp from  '../images/img_mp.png';
import Oa from  '../images/img_oa.png';

export default () => {
  return (
    <div className={style.container} id='weChat'>
        <span className={style.Latoh2}>Wechat Solutions</span>
        <div className={style.logoContainer}>
            <img src={Wechat} alt="" />
            <img src={WechatPay} alt="" />
        </div>
        <div className={style.contentContainer}>
            <div className={style.wechatImage}>
                <img src={Ma} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.Latoh31}><span className={style.orangeV}></span>CREATE WECHAT OFFICIAL ACCOUNT</div>
                <ul style={{textAlign:'left'}} className={style.SourceB}>
                    <li>Boost your social media presence to over 1 billion new Chinese monthly active users</li>
                    <li>Give potential customers confidence that your brands image on WeChat is linked to a verified WeChat Service Account registered in your trading legal entities name</li>
                    <li>Better manage interactions with a mini-website on WeChat</li>
                    <li>Showcase your products through an in-app shop. Customer check out through a “one-click-payment”</li>
                    <li>With a brand accounts, create a micro-site under the navigation bar to serve all of your content to the user, including a store locator page</li>
                </ul>
            </div>
        </div>
        <div className={style.contentContainer}>
            <div style={{marginLeft:'40px'}}className={style.content}>
                <div className={style.Latoh31}><span className={style.orangeV}></span>WECHAT MOMENTS</div>
                <div style={{textAlign:'left'}} className={style.SourceB}>
                Moments act like a cross between a user’s Facebook page and newsfeed allowing the user to share their status, photos, articles, etc. with their WeChat contacts.   
                </div>
                <br />
                <div style={{textAlign:'left'}} className={style.SourceB}>
                Moments ads are used to promote an Official Account or campaign, and encourage users to download an app, distribute coupons and launch location-based promotions. For Moments ads, advertisers can define their target users according to their gender, age, location, industry, marital status, education level, etc.
                </div>
            </div>
            <div className={style.wechatImage}>
                <img src={Mp} alt="" />
            </div>
        </div>
        <div className={style.contentContainer}>
            <div className={style.wechatImage}>
                <img src={Oa} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.Latoh31}><span className={style.orangeV}></span>WECHAT MINI PROGRAM</div>
                <div style={{textAlign:'left'}} className={style.SourceB}>
                With most of the features of an Official Service Account, essentially mini-programs are light apps built within WeChat allowing for a user experience similar to native iOS or Android apps.</div>
                <br />
                <div style={{textAlign:'left'}} className={style.SourceB}>
                Mini-programs remove virtually all of the friction and inconvenience of native apps. They also offer significant benefits to programmers in terms of reducing the resources and time needed for development.</div>
                <br />
                <div style={{textAlign:'left'}} className={style.SourceB}>
                Mini-programs are a kind of app that doesn’t need to be downloaded or installed to be used. They realise the dream that apps can be accessible everywhere. Users just scan or search to open the app. They “use it then go”, you needn’t worry did you install too many apps. Apps can be absolutely everywhere, you can use them anytime, but you don’t need to install anything.</div>
            </div>
        </div>
    </div>
  )
}
