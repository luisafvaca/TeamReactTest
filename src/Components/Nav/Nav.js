import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

import './Nav.css'
import { Toolbar } from 'react-md';

const menuButtonsConf = [
    {
        btnName: "Home",
        to: "./",
        disable: "true"
    },{
        btnName: "Products",
        to: "./products",
        disable: "false"
    },{
        btnName: "Clients",
        to: "./",
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
                        <button>{item.btnName}</button>
                    </Link>
                </li>
            )
        })
    }
    render(){
        const tabs = this.configMenu(menuButtonsConf);
        return(
            <Toolbar colored className="nav">
                <ul className="nav-item">
                    {tabs}
                </ul>
            </Toolbar>
        )
    }
}

export default Nav