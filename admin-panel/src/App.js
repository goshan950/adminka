import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Table from "./Components/Table/Table";
import Tokens from "./Components/Tokens/Tokens";
import {Route} from "react-router";


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
                   render={() => <Table/>}/>
            <Route path='/tokens'
                   render={() => <Tokens/>}/>
          </div>

        </div>
      </div>
  );
}

export default App;
