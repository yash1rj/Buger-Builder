import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p>Current Price : <strong><span>&#8377;</span>{props.price}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>PROCEED</Button>
        </Aux>
    )
};

export default orderSummary;