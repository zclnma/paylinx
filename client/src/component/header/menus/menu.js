import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import {HashLink as Link} from 'react-router-hash-link';

import './menu.css';
//import {Link} from 'react-router-dom';
export default class menu extends Component {
    state = {
        showMenus: false, 
    }

    mouseenterHandler = () => {
        console.log(this.props.data)
        this.setState({showMenus: true})
    }

    mouseleaveHandler = () => {
        this.setState({showMenus: false})
    }
  render() {

    let content = null;
    let color = this.props.color;
    content = (!this.state.showMenus? 
    <div style={{textAlign: 'center'}}>
        <img src={require('../images/' + this.props.image + '.png')} alt="" />
        <div styleName="lineBreak"></div>
        <div className="lato-subtitle" style={{marginTop: '10px'}}>{this.props.title}</div>
    </div> :  <div>
            <div styleName="orange"></div>
        <div className="lato-subtitle">{this.props.title === "LOG IN" ? 
            <a 
                style={{ color:'white'}} 
                href={this.props.link}>
                {this.props.title}
            </a> : 
            <Link 
                to={this.props.link} 
                style={{ color:'white'}}>
                {this.props.title}
                </Link>}
                </div>
            <ul>            
            {this.props.data.map((menu, index) =>{
                return   <QueueAnim className="demo-content"
                            animConfig={[
                            { opacity: [1, 0], translateY: [0, 100] },
                            { opacity: [1, 0], translateY: [0, -100] }]}>
                            {
                                this.props.title === "LOG IN" ? 
                                <li key={index}>
                                    <a className="lato-ssubtitle"
                                        styleName="link" 
                                        href={menu.link}>
                                        {menu.value}
                                    </a>
                                </li> :
                                <li key={index}>
                                    <Link to={[this.props.link,menu.htag].join('')} 
                                        className="lato-ssubtitle" 
                                        styleName="link">
                                        {menu.value}
                                    </Link>
                                </li>
                            }
                        </QueueAnim>
            })}
            </ul>
        </div>)

    return (
        <div styleName="modal"
            style={{backgroundColor: color}}
            onMouseEnter={this.mouseenterHandler}
            onMouseLeave={this.mouseleaveHandler}>
            {content}
        </div>
    )
  }
}
