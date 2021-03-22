import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey} :</span>{props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your ORDER</h3>
            <p>Delicious Burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
};

export default orderSummary;