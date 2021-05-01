import classes from './Order.module.css';
import React from 'react';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #DAA972',
                padding: '5px'
            }}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients : {ingredientOutput}</p>
            <p>Price : <strong><span>&#8377;</span>{props.price}</strong></p>
        </div>
    );
}

export default order;