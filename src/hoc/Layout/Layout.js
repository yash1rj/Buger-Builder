import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = ()=> {
        this.setState({showSideDrawer : false});
    }

    sideDrawerToggleHandler = ()=> {
        this.setState({showSideDrawer : true});
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.tokenId !== null
    };
};

export default connect(mapStateToProps)(Layout);