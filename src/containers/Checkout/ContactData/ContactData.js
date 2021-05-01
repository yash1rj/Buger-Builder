import classes from './ContactData.module.css';
import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Yash Raj',
                address: {
                    street: 'cda street',
                    zipCode: '80023',
                    country: 'India'
                },
                email: 'yash@test.com',
                deliveryMethod: 'fastest'
            }
        };
        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                // console.log(err);
                this.setState({
                    loading: false
                });
            });
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type='text' name="name" placeholder="Name" />
                <Input inputtype="input" type='email' name="email" placeholder="Email" />
                <Input inputtype="input" type='text' name="street" placeholder="Street" />
                <Input inputtype="input" type='text' name="zipCode" placeholder="Zip Code" />

                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data :</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;