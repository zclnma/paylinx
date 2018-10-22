import React from 'react'
import MediaQuery from 'react-responsive';

import client1 from '../images/img_testimonial1.png';
import client2 from '../images/img_testimonial2.png';
import client3 from '../images/img_testimonial3.png';
import client4 from '../images/img_testimonial4.png';

import './presentation.css';

export default function presentation() {
  return (
    <div styleName="out-container">
        <MediaQuery query="(min-width: 501px)">
            <div styleName="container">
                <div styleName="container-up">
                    <div styleName="inner-container-up">
                        <img src={client1} alt="" />
                    </div>
                    <div styleName="inner-container-up">
                        <img src={client2} alt="" />
                    </div>
                </div>
                <div styleName="container-bottom">
                    <div styleName="inner-container-bottom">
                        <img src={client3} alt="" />
                    </div>
                    <div styleName="inner-container-bottom">
                        <img src={client4} alt="" />
                    </div>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 500px)">
            <div styleName="mobile">
                <div styleName="mobile-image"><img src={client1} alt="" /></div>
                <div styleName="mobile-image"><img src={client2} alt="" /></div>
                <div styleName="mobile-image"><img src={client3} alt="" /></div>
                <div styleName="mobile-image"><img src={client4} alt="" /></div>
            </div>
        </MediaQuery>
    </div>
  )
}
