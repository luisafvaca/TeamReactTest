import React, { Component } from 'react';
import { List, Divider, Card, ListItem, Subheader } from 'react-md';

import './Products.css';

class Products extends Component {
    render(){
        return(
            <Card className="md-cell md-paper md-paper--1 products-filter">
                <Subheader>Categories</Subheader>
                <List className="products-filter-list">
                    <ListItem primaryText="All"></ListItem>
                    <Divider></Divider>
                    <ListItem primaryText="Tech"></ListItem>
                    <ListItem primaryText="Services"></ListItem>
                    <ListItem primaryText="Office"></ListItem>
                </List>
            </Card>
        )
    }
}

export default Products