import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ItemsView from './ItemsView/ItemsView';

import './Products.css';

class Products extends Component {
    render(){
        return(
            <section className="products-container">
                <Filter></Filter>
                <ItemsView></ItemsView>
            </section>
        )
    }
}

export default Products