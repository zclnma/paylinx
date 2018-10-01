import React from 'react';
import { Collapse, Input } from 'antd';
import FAQfiles from './FAQ';
import style from './searchBar.css';

const Panel = Collapse.Panel;
const Search = Input.Search;

export default () => {
    let faq = null;
    faq = FAQfiles.map((FAQfile,index) => {
        return <Panel header={FAQfile.title} key={index}>
            {FAQfile.questions.map( (question, innerIndex) => {
                return (
                    <div key={innerIndex}>
                        <div className={style.Latoh3}>{question.question}</div>
                        <div className={style.SourceB}>{question.answer}</div>
                    </div>
                )
            })}
        </Panel>
    })
  return (
    <div className={style.searchContainer}>
        <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: '100%' }}/>
        <Collapse accordion style={{width:'100%'}}>
            {faq}
        </Collapse>
    </div>
  )
}
