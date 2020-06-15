import React from 'react';

import {
    DollarOutlined,
    ImportOutlined,
    PlusOutlined,
    SolutionOutlined,
    TableOutlined,
    UserOutlined,
} from '@ant-design/icons';

import {Menu} from 'antd';
import {NavLink} from "react-router-dom";
import s from "./NavBar.module.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={this.props.navCollapsed ? s.collapsed : s.opened}>
                <div className={s.logoContainer}>
                    {!this.props.navCollapsed && <img className={s.logo}
                                                      src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>}
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.props.navCollapsed}
                    style={{marginTop: 20}}
                >

                    <Menu.Item key="1" icon={<UserOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/profile">
                            Личный кабинет
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlusOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/number">
                            Получить номер
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TableOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/table">
                            Таблица заказов
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DollarOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/tokens">
                            Токены
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SolutionOutlined style={{fontSize: '20px'}}/>}>
                        <NavLink to="/api">
                            API
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ImportOutlined style={{fontSize: '20px'}}/>}
                               onClick={this.props.logout}>
                        Выход
                    </Menu.Item>
                </Menu>
                </div>
            </div>
        );
    }
}

export default NavBar;