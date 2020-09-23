import React, {useEffect} from 'react';
import './App.css';

import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

import NavBarContainer from "./Components/Navbar/NavBarContainer";
import Tokens from "./Components/Tokens/Tokens";
import Authorization from "./Components/Authorization/Authorization";
import ApiGuide from "./Components/ApiGuide/ApiGuide";
import Preloader from "./Components/common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import {DesktopOrLaptop, Mobile} from "./Components/common/MediaQueries/MediaQueries";
import Profile from "./Components/Profile/Profile";
import Number from "./Components/Number/Number";
import {withSuspense} from "./hoc/withSuspense";

const SmsTable = React.lazy(() => import('./Components/Table/SmsTable'));

const App = () => {
    const dispatch = useDispatch();
    const initialized = useSelector((state) => state.app.initialized);
    const isAuth = useSelector((state) => state.auth.isAuth);

    useEffect( () => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) {
        return <Preloader/>
    }
    if (!isAuth) {
        return <Authorization/>
    }

    return (
        <div className='app-wrapper'>
            <DesktopOrLaptop>
                <NavBarContainer/>
            </DesktopOrLaptop>
            <Mobile>
                <Header/>
            </Mobile>
            <div className='content-wrapper'>
                <DesktopOrLaptop>
                    <Header/>
                </DesktopOrLaptop>
                <Mobile>
                    <NavBarContainer/>
                </Mobile>
                <div className='content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/profile'
                               render={() => <Profile/>}/>
                        <Route path='/table'
                               render={withSuspense(SmsTable)}/>
                        <Route path='/tokens'
                               render={() => <Tokens/>}/>
                        <Route path='/api'
                               render={() => <ApiGuide/>}/>
                        <Route path='/number'
                               render={() => <Number/>}/>
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App;
