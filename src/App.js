import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

import Header from "./Components/Header/Header";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Profile from "./Components/Profile/Profile";
import Tokens from "./Components/Tokens/Tokens";
import Authorization from "./Components/Authorization/Authorization";
import ApiGuide from "./Components/ApiGuide/ApiGuide";
import SmsTable from "./Components/Table/SmsTable";

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
                <Header/>
                <div className='basic'>
                    <div className='navbar'>
                        <NavbarContainer/>
                    </div>
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
