import React from 'react';
import style from './iconBar.css';
import Industry1 from './icons/icon_industry-17.png';
import Industry2 from './icons/icon_industry-18.png';
import Industry3 from './icons/icon_industry-19.png';
import Industry4 from './icons/icon_industry-20.png';
import Industry5 from './icons/icon_industry-21.png';
import Industry6 from './icons/icon_industry-22.png';
import Industry7 from './icons/icon_industry-23.png';
import Industry8 from './icons/icon_industry-24.png';

export default () => {
  return (
    <div className={style.iconBar}>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry1} alt= "" />
        <div className={style.SourceB}>Hospitality</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry2} alt= "" />
        <div className={style.SourceB}>Retail</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry3} alt= "" />
        <div className={style.SourceB}>Education</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry4} alt= "" />
        <div className={style.SourceB}>Logistics</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry5} alt= "" />
        <div className={style.SourceB}>Medical Services</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry6} alt= "" />
        <div className={style.SourceB}>Sporting Organisations</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry7} alt= "" />
        <div className={style.SourceB}>Major Events</div>
      </div>
      <div style={{width: '10%', margin:'auto'}}>
        <img src={Industry8} alt= "" />
        <div className={style.SourceB}>Tourist Attractions</div>
      </div>
    </div>
  )
}
