import React from 'react';
import NavBar from './NavBar';
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import MediaQuery from 'react-responsive'
import {toggleNavCollapsed} from "../../redux/app-reducer";

class NavBarContainer extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={768}>
                {(matches) => matches
                    ? <NavBar {...this.props} />
                    : <NavBarMobile {...this.props} />
                }
            </MediaQuery>
        )
    }
}

const mapStateToProps = (state) => ({
    navCollapsed: state.app.navCollapsed
});

export default connect(mapStateToProps, {logout, toggleNavCollapsed})(NavBarContainer)