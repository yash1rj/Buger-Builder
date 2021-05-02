import classes from './Button.module.css';
import React from 'react';

const button = (props) => (
    <button 
        onClick={props.clicked}
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
);

export default button;