import React from 'react';
import { Collapse} from 'antd';
import FAQfiles from './FAQ';
import './searchBar.css';

const Panel = Collapse.Panel;

export default () => {
    let faq = null;
    faq = FAQfiles.map((FAQfile,index) => {
        return <Panel header={FAQfile.title} key={index}>
            {FAQfile.questions.map( (question, innerIndex) => {
                return (
                    <div key={innerIndex}>
                        <div styleName="Latoh3">{question.question}</div>
                        <div styleName="SourceB">{question.answer}</div>
                    </div>
                )
            })}
        </Panel>
    })
  return (
    <div styleName="searchContainer">
        <Collapse accordion style={{width:'100%'}}>
            {faq}
        </Collapse>
    </div>
  )
}
