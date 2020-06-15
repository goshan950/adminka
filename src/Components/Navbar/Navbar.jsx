import React from 'react';

import {
    DollarOutlined,
    ImportOutlined,
    PlusOutlined,
    SolutionOutlined,
    TableOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Menu} from 'antd';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

class Navbar extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {!this.props.navCollapsed && <img className={s.logo}
                                                  src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>}
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.props.navCollapsed}
                    style={{marginTop: 20}}
                >
                    <Menu.Item key="1">
                        <NavLink to="/profile">
                            <UserOutlined style={{fontSize: '24px'}} />
                            <span>Личный кабинет</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/number">
                            <PlusOutlined style={{fontSize: '24px'}} />
                            <span>Получить номер</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/table">
                            <TableOutlined style={{fontSize: '24px'}} />
                            <span>Таблица заказов</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/tokens">
                            <DollarOutlined style={{fontSize: '24px'}} />
                            <span>Токены</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/api">
                            <SolutionOutlined style={{fontSize: '24px'}} />
                            <span>API</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" onClick={this.props.logout}>
                        <ImportOutlined style={{fontSize: '24px'}} />
                        <span>Выход</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navbar;