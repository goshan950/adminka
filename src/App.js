import React, {Component} from 'react';
import './App.css';

import Media from 'react-media';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";

import NavBarContainer from "./Components/Navbar/NavBarContainer";
import Profile from "./Components/Profile/Profile";
import Tokens from "./Components/Tokens/Tokens";
import Authorization from "./Components/Authorization/Authorization";
import ApiGuide from "./Components/ApiGuide/ApiGuide";
import SmsTable from "./Components/Table/SmsTable";
import Preloader from "./Components/common/Preloader/Preloader";
import HeaderContainer from "./Components/Header/HeaderContainer";

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
                <Media queries={{ small: "(min-width: 993px)" }}>
                    {matches => matches.small
                        ? <NavBarContainer/>
                        : <HeaderContainer/>
                    }
                </Media>
                <div className='content-wrapper'>
                    <Media queries={{ small: "(min-width: 993px)" }}>
                        {matches => matches.small
                            ? <HeaderContainer/>
                            : <div className='nav-bar'>
                                <NavBarContainer/>
                              </div>
                        }
                    </Media>
                    <div className='content'>
                        <Route path='/profile'
                               render={() => <Profile/>}/>
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
