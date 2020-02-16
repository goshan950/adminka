import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

import Header from "./Components/Header/Header";
import Navbar from "./Components/NewNavbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Tokens from "./Components/Tokens/Tokens";
import MyTable from "./Components/Table/MyTable";
import Authorization from "./Components/Authorization/Authorization";

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
                    <Navbar/>
                    <div className='content'>
                        <Route path='/profile'
                               render={() => <Profile/>}/>
                        <Route path='/table'
                               render={() => <MyTable/>}/>
                        <Route path='/tokens'
                               render={() => <Tokens/>}/>
                        <Route path='/login'
                               render={() => <Authorization/>}/>
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
