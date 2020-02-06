import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Icon} from "antd";

class Navbar extends Component {
    render() {
        return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile"><Icon type="user"/>Личный кабинет</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/table">Таблица заказов</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/tokens">Токены</NavLink>
                </div>
            </nav>
        );
    }
}

export default Navbar;