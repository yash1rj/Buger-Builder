import classes from './Modal.module.css';
import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show || nextProps.children !== props.children;
    // }
    // Instead we can use React memo
    // And if we only want to check a subset of props and not all before updating, 
    // React memo takes a second argument(function) where we can add our own comparison
    // this fn. receives prevProps and nextProps as input then we return true/false 
    // to deceide whether the props are equal or not
    // opposite logic of what we have in shouldComponentUpdate

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );
}

export default React.memo(Modal, (prevProps, nextProps) => 
    nextProps.show === prevProps.show && 
    nextProps.children === prevProps.children
);