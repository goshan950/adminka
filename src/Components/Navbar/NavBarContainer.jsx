import React from 'react';
import NavBar from './NavBar';
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Media from "react-media";
import {toggleNavCollapsed} from "../../redux/app-reducer";

class NavBarContainer extends React.Component {
    render() {
        return (
            <Media queries={{small: "(min-width: 768px)"}}>
                {matches => matches.small
                    ? <NavBar {...this.props} />
                    : <NavBarMobile {...this.props} />
                }
            </Media>
        )
    }
}

const mapStateToProps = (state) => ({
    navCollapsed: state.app.navCollapsed
});

export default connect(mapStateToProps, {logout, toggleNavCollapsed})(NavBarContainer)