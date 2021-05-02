import classes from './Input.module.css';
import React from 'react';

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    let validationErr = null;

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
        validationErr = <p className={classes.ValidationErr}>Please enter a valid value for {props.valueType}</p>
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}
                onChange= {props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}
                onChange= {props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
                    onChange= {props.changed}
                    value={props.value}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayName}</option>
                        ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(" ")}
                onChange= {props.changed}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationErr}
        </div>
    );
};

export default input;