import React from 'react';
import { Card, Subheader, CardTitle, CardText} from 'react-md';
import './ItemCard.css'

const ItemsCards = (props) => {
    const items = props.items;
    const isList = props.isList ? "items-cards--list" : "items-cards--block";
    return items.map(function(item){
        return(
            <Card className={`items-cards ${isList}`}>
                <CardTitle title={item.name}></CardTitle >
                <Subheader primaryText={item.brand}></Subheader>
                <div className="Item-view-img-cont">   
                    <img className="items-cards-image"alt="item" src={item.photo}></img>
                    <div>
                        <CardText>{item.description}</CardText>
                        <div>{`Stock:${item.stock}`}</div>
                        <div>{`Price:${item.price}`}</div>
                    </div>
                </div>
            </Card>
        )
    })
}

export default ItemsCards;