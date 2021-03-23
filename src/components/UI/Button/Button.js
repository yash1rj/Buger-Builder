import classes from '*.module.css';
import React from 'react';

const button = (props) => (
    <button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
);

export default button;