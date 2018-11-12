import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menuButtonsConf } from '../../Utils/configUtils';
import './Nav.css'

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