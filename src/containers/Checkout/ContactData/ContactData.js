import classes from './ContactData.module.css';
import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data :</h4>
                <form>
                    <input className={classes.Input} type='text' name="name" placeholder="Name" />
                    <input className={classes.Input} type='email' name="email" placeholder="Email" />
                    <input className={classes.Input} type='text' name="street" placeholder="Street" />
                    <input className={classes.Input} type='text' name="zipCode" placeholder="Zip Code" />

                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;