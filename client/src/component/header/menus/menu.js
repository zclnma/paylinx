import React, { Component,Fragment } from 'react'
import QueueAnim from 'rc-queue-anim';
import {HashLink as Link} from 'react-router-hash-link';
import MediaQuery from 'react-responsive';

import './menu.css';
//import {Link} from 'react-router-dom';
export default class menu extends Component {
    state = {
        showMenus: false, 
    }

    mouseenterHandler = () => {
        //console.log(this.props.data)
        this.setState({showMenus: true})
    }

    mouseleaveHandler = () => {
        this.setState({showMenus: false})
    }
  render() {

    let content = null;
    let color = this.props.color;
    content = 
    <Fragment>
        <MediaQuery query="(min-width: 501px)">
        {!this.state.showMenus? 
        <div style={{textAlign: 'center'}}>
            <img src={require('../images/' + this.props.image + '.png')} alt="" />
            <div styleName="lineBreak"></div>
            <div styleName="lato-subtitle" style={{marginTop: '10px'}}>{this.props.title}</div>
        </div> :  <div>
                <div styleName="orange"></div>
            <div 
                styleName="lato-subtitle"
                onClick={this.props.closed}>{this.props.title === "LOG IN" ? 
                <a 
                    style={{ color:'white'}} 
                    href={this.props.link}
                    rel="noopener noreferrer" target="_blank">
                    {this.props.title}
                </a> : 
                <Link 
                    to={this.props.link} 
                    style={{ color:'white'}}
                    >
                    {this.props.title}
                    </Link>}
                    </div>
                <ul>            
                {this.props.data.map((menu, index) =>{
                    return   <QueueAnim key={index}>
                                {
                                    this.props.title === "LOG IN" ? 
                                    <li 
                                        key={index}
                                        onClick={this.props.closed}>
                                        <a  key={index}
                                            className="lato-ssubtitle"
                                            styleName="link" 
                                            href={menu.link}
                                            rel="noopener noreferrer" target="_blank">
                                            {menu.value}
                                        </a>
                                    </li> :
                                    <li 
                                        key={index}
                                        onClick={this.props.closed}>
                                        <Link key={index}
                                            to={[this.props.link,menu.htag].join('')} 
                                            className="lato-ssubtitle" 
                                            styleName="link">
                                            {menu.value}
                                        </Link>
                                    </li>
                                }
                            </QueueAnim>
                })}
                </ul>
            </div>}
        </MediaQuery>
        <MediaQuery query="(max-width: 500px)">
            <div styleName="menu-mobile">
                <div styleName="orange"></div>
                <div styleName="lato-subtitle"
                    onClick={this.props.closed}>{this.props.title === "LOG IN" ? 
                    <a 
                        style={{ color:'white'}} 
                        href={this.props.link}
                        rel="noopener noreferrer" target="_blank">
                        {this.props.title}
                    </a> : 
                    <Link 
                        to={this.props.link} 
                        style={{ color:'white'}}>
                        {this.props.title}
                    </Link>}
                </div>
            </div><div styleName="submenu-mobile">
                <ul>            
                {this.props.data.map((menu, index) =>{
                    return  this.props.title === "LOG IN" ? 
                                    <li key={index}
                                    onClick={this.props.closed}>
                                        <a className="lato-ssubtitle"
                                            styleName="link" 
                                            href={menu.link}
                                            rel="noopener noreferrer" target="_blank">
                                            {menu.value}
                                        </a>
                                    </li> :
                                    <li key={index}
                                        onClick={this.props.closed}>
                                        <Link to={[this.props.link,menu.htag].join('')} 
                                            className="lato-ssubtitle" 
                                            styleName="link">
                                            {menu.value}
                                        </Link>
                                    </li>
                            })}
                </ul>    
        </div>
        </MediaQuery>
    </Fragment>



    return (
        <Fragment>
            <MediaQuery query="(min-width: 501px)">
                <div styleName="modal"
                    style={{backgroundColor: color}}
                    onMouseEnter={this.mouseenterHandler}
                    onMouseLeave={this.mouseleaveHandler}>
                    {content}
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 500px)">
                <div styleName="modal-mobile"
                    style={{backgroundColor: color}}
                    onMouseEnter={this.mouseenterHandler}
                    onMouseLeave={this.mouseleaveHandler}>
                    {content}
                </div>
            </MediaQuery>
        </Fragment>
    )
  }
}
