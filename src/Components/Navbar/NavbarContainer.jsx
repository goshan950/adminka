import React from 'react';
import Navbar from './Navbar';
import NavbarMobile from "./NavbarMobile";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Media from "react-media";

class NavbarContainer extends React.Component {
    render() {
        return <Media queries={{ small: "(min-width: 993px)" }}>
            {matches =>
                matches.small ? (
                    <Navbar {...this.props} />
                ) : (
                    <NavbarMobile {...this.props} />
                )
            }
        </Media>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(NavbarContainer)