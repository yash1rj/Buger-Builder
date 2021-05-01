import classes from './Order.module.css';
import React from 'react';

const order = () => (
    <div className={classes.Order}>
        <p>Ingredients : Salad (1)</p>
        <p>Price : <strong><span>&#8377;</span>15</strong></p>
    </div>
);

export default order;