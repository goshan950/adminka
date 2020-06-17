import React, {Component} from 'react';
import './App.css';

import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";

import NavBarContainer from "./Components/Navbar/NavBarContainer";
import Tokens from "./Components/Tokens/Tokens";
import Authorization from "./Components/Authorization/Authorization";
import ApiGuide from "./Components/ApiGuide/ApiGuide";
import SmsTable from "./Components/Table/SmsTable";
import Preloader from "./Components/common/Preloader/Preloader";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {DesktopOrLaptop, Mobile} from "./Components/common/MediaQueries/MediaQueries";
import ProfileNew from "./Components/Profile/ProfileNew";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        if (!this.props.isAuth) {
            return <Authorization/>
        }

        return (
            <div className='app-wrapper'>
                <DesktopOrLaptop>
                    <NavBarContainer/>
                </DesktopOrLaptop>
                <Mobile>
                    <HeaderContainer/>
                </Mobile>
                <div className='content-wrapper'>
                    <DesktopOrLaptop>
                        <HeaderContainer/>
                    </DesktopOrLaptop>
                    <Mobile>
                        <NavBarContainer/>
                    </Mobile>
                    <div className='content'>
                        <Route path='/profile'
                               render={() => <ProfileNew/>}/>
                        <Route path='/table'
                               render={() => <SmsTable/>}/>
                        <Route path='/tokens'
                               render={() => <Tokens/>}/>
                        <Route path='/api'
                               render={() => <ApiGuide/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
