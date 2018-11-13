import React from 'react';
import { Card, Subheader, CardTitle, CardText} from 'react-md';

import './ItemCard.css'

/**
 * Event Click to buil an item card 
 * @param {Object} function buil cards
 *
*/
const ItemsCards = (props) => {
    const items = props.items;
    const isList = props.isList ? "items-cards--list" : "items-cards--block";
    return items.map(function(item, idx){
        return(
            <Card key={idx} className={`items-cards ${isList}`}>
                <CardTitle title={item.name}></CardTitle >
                <Subheader primaryText={item.brand}></Subheader>
                <div className="items-cards-cont">
                    <div>
                        <img className="items-cards-image"alt="item" src={item.photo}></img>   
                    </div>   
                    <div>
                        <CardText>{item.description}</CardText>
                        <div className="items-cards-stock">
                            <div>{`Stock: $${item.stock}`}</div>
                            <div>{`Price: $${item.price}`}</div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    })
}

export default ItemsCards;