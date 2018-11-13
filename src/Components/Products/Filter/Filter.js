import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtered } from '../../../Actions/getStoreData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter  } from 'react-router-dom'

import { filterConf } from '../../../Utils/configUtils';
import { 
    List,
    Paper,  
    AccessibleFakeInkedButton, 
    Card, 
    Subheader,
    Avatar,
    IconSeparator,
    Divider
} from 'react-md';

import './Filter.css';

class Filter extends Component {
    constructor(props){
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
        this.buildFilters = this.buildFilters.bind(this)
    }

    onClickEvent(e){
        const type = e.currentTarget.getAttribute('name');
        this.props.filter(type);
        
        console.log(BrowserRouter, '-----------')
    }
    /**
     * Event Click to filter cards
     * @param {func} onClickEvent handler filter
     *
    */
    buildFilters(onClickEvent){
        return filterConf.map(function(item, idx){
            return(
                <List key={idx}>
                    <li>
                        <AccessibleFakeInkedButton className="filter-icon" name={item.label} onClick={(e)=>onClickEvent(e)}>
                        <IconSeparator
                            label={(
                            <div>
                                <p className="md-text">{item.label}</p>
                            </div> 
                            )}
                            iconBefore
                        >
                            <Avatar icon={<FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>}/>
                        </IconSeparator>
                        </AccessibleFakeInkedButton>
                    </li>
                    {item.hasDivider ? <Divider></Divider>: null}
                </List>
            )
        })
    }
    render(){
        const click = this.onClickEvent;
        const items = this.buildFilters(click);

        return(
            <Card className="md-cell md-paper products-filter">
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