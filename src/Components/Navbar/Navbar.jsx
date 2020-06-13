import React from 'react';

import {
    DollarOutlined,
    ImportOutlined,
    PlusOutlined,
    SolutionOutlined,
    TableOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import { Menu, Button } from 'antd';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

class Navbar extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className={s.wrapper}>
                <Button onClick={this.toggleCollapsed} style={{marginBottom: 16, marginLeft: 20}}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}

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