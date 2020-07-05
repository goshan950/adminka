import React from 'react';
import {connect} from "react-redux";
import {toggleNavCollapsed} from "../../redux/app-reducer";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state) => ({
    navCollapsed: state.app.navCollapsed
});

export default connect(mapStateToProps, {toggleNavCollapsed})(HeaderContainer)