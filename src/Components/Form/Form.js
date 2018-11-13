import React, {Component} from 'react';
import { TextField, Dialog, CardActions, Button } from 'react-md';
import { formConfig } from '../../Utils/configUtils';

import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.onChangeInput = this.onChangeInput.bind(this)
    }

    onChangeInput(e, name){
        console.log(e, name)
    }

    buildFormFields(config, onClick){
        return config.map(function(item){
            const name = item.label;
            return(
                <TextField 
                    errorText={item.errorText} 
                    required={item.isRequired} 
                    label={item.label} 
                    placeholder={item.placeholder} 
                    className="md-cell md-cell--bottom form-item"
                    onChange={(e)=>onClick(e, name)} 
                />
            )
        })
    }
    render(){
        const onChangeEvent = this.onChangeInput;
        const contentField = this.buildFormFields(formConfig, onChangeEvent);
        return(
            <Dialog containFocus={false} aria-labelledby="static-dialog-title" className="md-background--card form">
                <form className="md-grid">
                    {contentField}
                    <CardActions className="md-cell md-cell--12">
                        <Button raised primary type="submit" className="md-cell--right">Submit</Button>
                    </CardActions>
                </form>
            </Dialog>
        )
    }
}

export default Form;