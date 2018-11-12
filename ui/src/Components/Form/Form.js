import React, {Component} from 'react';
import { TextField, Dialog, CardActions, Button } from 'react-md';
import { formConfig } from '../../Utils/configUtils';
import './Form.css'

class Form extends Component {
    buildFormFields(config){
        return config.map(function(item){
            return(
                <TextField 
                    errorText={item.errorText} 
                    required={item.isRequired} 
                    label={item.label} 
                    placeholder={item.placeholder} 
                    className="md-cell md-cell--bottom form-item" 
                />
            )
        })
    }
    render(){
        const contentField = this.buildFormFields(formConfig);
        return(
            <Dialog containFocus={false} aria-labelledby="static-dialog-title" className="md-background--card form">
                <form className="md-grid">
                    {contentField}
                    <CardActions className="md-cell md-cell--12">
                        <Button disabled raised primary type="submit" className="md-cell--right">Submit</Button>
                    </CardActions>
                </form>
            </Dialog>
        )
    }
}

export default Form;