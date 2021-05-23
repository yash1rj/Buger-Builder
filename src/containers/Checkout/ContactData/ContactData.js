import classes from './ContactData.module.css';
import React, { useState } from 'react';

import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import WithErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import * as actions from '../../../store/actions/index';

import { connect } from 'react-redux';
import { updateObject, checkValidity } from '../../../shared/utility';

const ContactData = props => {

    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'e-mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'fastest', displayName: 'Fastest' },
                    { value: 'cheapest', displayName: 'Cheapest' }
                ]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    });
    
    const [isFormValid, setFormValidity] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault(); // we dont want to send data automatically and therby refresh the page

        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            userId: props.userId
        };

        props.onOrderBurger(order, props.token);
    }

    const inputChangedHandler = (event, inputIdentifier) => {

        // deep copy as orderForm state contains nested JS object
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        updatedOrderForm[inputIdentifier] = updatedFormElement;
        // console.log(updatedFormElement);

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        // console.log(formIsValid);

        setOrderForm(updatedOrderForm);
        setFormValidity(formIsValid);
    }


    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    valueType={formElement.id}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}

            <Button btnType="Success" disabled={!isFormValid}>ORDER</Button>
        </form>
    );

    if (props.loading) {
        form = <Spinner />;
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data :</h4>
            {form}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.orders.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token, userId) => dispatch(actions.purchaseBurger(orderData, token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(ContactData, axios));