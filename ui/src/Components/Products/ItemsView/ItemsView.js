import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'react-md';

import ItemsCards from '../ItemCard/ItemCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons'

import './ItemsView.css';

class ItemsView extends Component {
    constructor(props){
        super(props);
        this.state = {
            isList: true
        }
        this.onType = this.onType.bind(this);
    }

    onType(e){
        console.log(e.target)
        const type = e.target.getAttribute("name") !== "list" ? false : true;
        this.setState({isList: type})
    }

    render(){
        const items = this.props.items;
        return(
            <div className="items-view">
                <div className="item-view-icons">
                    <div className="items-view-buttons">
                        <button className="items-view-button" name="list" onClick={this.onType}> </button>
                        <FontAwesomeIcon className="items-view-icon" icon={faThLarge} />
                    </div>
                    <div className="items-view-buttons">
                        <button className="items-view-button" name="block" onClick={this.onType}> </button>
                        <FontAwesomeIcon className="items-view-icon" icon={faTh} />
                    </div>
                </div>
                <div className="items-view-stats">
                    Showing: <span>{this.props.stats.show}</span> products - Hidden <span>{this.props.stats.hide}</span>
                </div>
                <Grid>
                    <ItemsCards items={items} isList={this.state.isList}/>
                </Grid>
            </div>

        )
    }
}

const mapStateToProps = (state) => {  
    return {
        items: state.store.filteredItems,
        stats: state.store.stats
    }
};

export default connect(mapStateToProps, null)(ItemsView)