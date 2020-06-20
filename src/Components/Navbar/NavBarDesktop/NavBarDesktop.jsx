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

const NavBarDesktop = (props) => {

    const handleMediaQueryChange = (matches) => {
        matches ? props.toggleNavCollapsed(false) : props.toggleNavCollapsed(true)
    }

    const isDesktopOrLaptop = useMediaQuery(
        {minWidth: 1240}, undefined, handleMediaQueryChange
    );

    return (
        <div className={s.wrapper}>
            {isDesktopOrLaptop}
            <div className={props.navCollapsed ? s.collapsed : s.opened}>
                <div className={s.logoContainer}>
                    <img src={logoMini} className={s.logoMini} alt="#"/>
                    {!props.navCollapsed && <img className={s.logo}
                                                 src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>}
                </div>
                <Menu
                    selectedKeys={[props.location.pathname]}
                    mode="inline"
                    inlineCollapsed={props.navCollapsed}
                    style={{marginTop: 24}}
                >

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
                               onClick={props.logout}>
                        Выход
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default NavBarDesktop;