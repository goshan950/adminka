import React from 'react';

import {
    DollarOutlined,
    ImportOutlined,
    SolutionOutlined,
    TableOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { useMediaQuery } from 'react-responsive'
import {Menu} from 'antd';
import {NavLink} from "react-router-dom";
import s from "./NavBarDesktop.module.css";
import logoMini from "../../../images/logo_mini.png";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/auth-reducer";
import {toggleNavCollapsed} from "../../../redux/app-reducer";
import {useLocation} from "react-router";

const NavBarDesktop = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navCollapsed = useSelector((state) => state.app.navCollapsed);

    const handleMediaQueryChange = (matches) => {
        matches ? dispatch(toggleNavCollapsed(false)) : dispatch(toggleNavCollapsed(true))
    }
    const isDesktopOrLaptop = useMediaQuery(
        {minWidth: 1240}, undefined, handleMediaQueryChange
    );

    return (
        <div className={s.wrapper}>
            {isDesktopOrLaptop}
            <div className={navCollapsed ? s.collapsed : s.opened}>
                <div className={s.logoContainer}>
                    <img src={logoMini} className={s.logoMini} alt="#"/>
                    {!navCollapsed && <img className={s.logo}
                                                 src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>}
                </div>
                <Menu
                    selectedKeys={[location.pathname]}
                    mode="inline"
                    inlineCollapsed={navCollapsed}
                    style={{marginTop: 24}}>
                    <Menu.Item key="/profile" icon={<UserOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/profile">
                            Личный кабинет
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/table" icon={<TableOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/table">
                            Таблица заказов
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/tokens" icon={<DollarOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/tokens">
                            Токены
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/api" icon={<SolutionOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/api">
                            API
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ImportOutlined style={{fontSize: '20px'}}/>}
                               onClick={() => dispatch(logout())}>
                        Выход
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default NavBarDesktop;