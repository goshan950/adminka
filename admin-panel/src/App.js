import React from 'react';
import {Route} from "react-router";

import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header/Header";
import Navbar from "./Components/NewNavbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Tokens from "./Components/Tokens/Tokens";
import MyTable from "./Components/Table/Table";

function App() {
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
          </div>

        </div>
      </div>
  );
}

export default App;
