import React from 'react';
import { Dialog } from 'react-md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons'

import './NoContent.css';

const NoContent = () =>{
    return(
        <section className="no-content">
            <Dialog containFocus={false} aria-labelledby="static-dialog-title" className="md-background--card">
                <h1 id="static-dialog-title">Hello!</h1>
                <p>We are sorry, no content for now</p>
                <FontAwesomeIcon icon={faSadCry} className="bookmark"></FontAwesomeIcon>
            </Dialog>   
        </section>
    )
}

export default NoContent;