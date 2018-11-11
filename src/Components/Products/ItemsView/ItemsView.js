import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Grid, Subheader, CardTitle, CardText, Media} from 'react-md';
import "./ItemsView.css";

class ItemsView extends Component {
    render(){
        return(
            <Grid>
                <Card>
                    <CardTitle title={"This is the title"}></CardTitle >
                    <Subheader primaryText={"test"}></Subheader>
                    <div className="Item-view-img-cont">   
                        <img alt="item" src="http://mouse.latercera.com/wp-content/uploads/2018/03/adventure-time.jpg"></img>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </CardText>

                    </div>
                </Card>
            </Grid>
        )
    }
}

export default connect(null, null)(ItemsView)