import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtered } from '../../../Actions/getStoreData';

import { 
    List,
    Paper,  
    AccessibleFakeInkedButton, 
    Card, 
    Subheader, 
    FontIcon,
    Avatar,
    IconSeparator
} from 'react-md';

import './Filter.css';

const filterConf = [
    {
        label: "All",
        hasDivider: true,
    },{
        label: "Tech",
        hasDivider: false,
    },{
        label: "Services",
        hasDivider: false,
    },

];

class Filter extends Component {
    constructor(props){
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
        this.buildFilters = this.buildFilters.bind(this)
    }

    onClickEvent(e){
        const type = e.currentTarget.getAttribute('name');
        this.props.filter(type);
    }

    buildFilters(onClickEvent){
        console.log("entandooooo", this)
        return filterConf.map(function(item, idx){
            return(
                <List key={idx}>
                    <li>
                        <AccessibleFakeInkedButton className="list-item__content" name={item.label} onClick={(e)=>onClickEvent(e)}>
                        <IconSeparator
                            label={(
                            <div>
                                <p className="md-text">{item.label}</p>
                            </div> 
                            )}
                            iconBefore
                        >
                            <Avatar icon={<FontIcon>folder</FontIcon>} />
                        </IconSeparator>
                        </AccessibleFakeInkedButton>
                    </li>
                </List>
            )
        })
    }
    render(){
        const click = this.onClickEvent;
        const items = this.buildFilters(click);
        console.log(items, 'itemsss')
        return(
            <Card className="md-cell md-paper md-paper--1 products-filter">
                <Subheader primaryText={"Categories"}/>
                <Paper className="main-example">
                    <List>
                       {items}
                    </List>
                </Paper>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    dispatch,
    filter: (type) => dispatch(filtered(type))
    }
}

export default connect(null, mapDispatchToProps)(Filter);