import classes from './Modal.module.css';
import React from 'react';

const modal = (props) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;