import React from 'react';
import NavBarDesktop from './NavBarDesktop/NavBarDesktop';
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import MediaQuery from 'react-responsive'
import {toggleNavCollapsed} from "../../redux/app-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const NavBarContainer = (props) => {
    return (
        <MediaQuery minWidth={768}>
            {(matches) => matches
                ? <NavBarDesktop {...props} />
                : <NavBarMobile logout={props.logout}/>}
        </MediaQuery>
    )
}

const mapStateToProps = (state) => ({
    navCollapsed: state.app.navCollapsed
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logout, toggleNavCollapsed})
)(NavBarContainer)