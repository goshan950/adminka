import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';

ReactDOM.render(
    <HashRouter>
        <ConfigProvider locale={ruRU}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ConfigProvider>
    </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
