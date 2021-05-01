import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;