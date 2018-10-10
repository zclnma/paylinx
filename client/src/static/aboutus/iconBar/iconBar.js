import React from 'react';
import './iconBar.css';
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
    <div styleName="iconBar">
      <div styleName="icon">
        <img src={Industry1} alt= "" />
        <div styleName="body">Hospitality</div>
      </div>
      <div styleName="icon">
        <img src={Industry2} alt= "" />
        <div styleName="body">Retail</div>
      </div>
      <div styleName="icon">
        <img src={Industry3} alt= "" />
        <div styleName="body">Education</div>
      </div>
      <div styleName="icon">
        <img src={Industry4} alt= "" />
        <div styleName="body">Logistics</div>
      </div>
      <div styleName="icon">
        <img src={Industry5} alt= "" />
        <div styleName="body">Medical Services</div>
      </div>
      <div styleName="icon">
        <img src={Industry6} alt= "" />
        <div styleName="body">Sporting Organisations</div>
      </div>
      <div styleName="icon">
        <img src={Industry7} alt= "" />
        <div styleName="body">Major Events</div>
      </div>
      <div styleName="icon">
        <img src={Industry8} alt= "" />
        <div styleName="body">Tourist Attractions</div>
      </div>
    </div>
  )
}
