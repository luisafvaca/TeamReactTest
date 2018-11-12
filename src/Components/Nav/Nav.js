import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

import './Nav.css'

const menuButtonsConf = [
    {
        btnName: "Home",
        to: "./home",
        disable: "true"
    },{
        btnName: "Products",
        to: "./products",
        disable: "false"
    },{
        btnName: "Clients",
        to: "./clients",
        disable: "true"
    },{
        btnName: "Contact",
        to: "./contact",
        disable: "false"
    }
]


class Nav extends Component {
    configMenu(items){
        return items.map(function(item, idx){
            return(
                <li key={idx}>
                    <Link to={item.to}>
                        <button className="nav-button">{item.btnName}</button>
                    </Link>
                </li>
            )
        })
    }
    render(){
        const tabs = this.configMenu(menuButtonsConf);
        return(
            <nav colored className="nav">
                <ul className="nav-item">
                    {tabs}
                </ul>
            </nav>
        )
    }
}

export default Nav