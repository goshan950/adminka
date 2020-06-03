import React from 'react';
import {Menu, Icon, Button} from 'antd';
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
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
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
                            <Icon type="user" style={{fontSize: '24px'}}/>
                            <span>Личный кабинет</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/number">
                            <Icon type="plus" style={{fontSize: '24px'}}/>
                            <span>Получить номер</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/table">
                            <Icon type="table" style={{fontSize: '24px'}}/>
                            <span>Таблица заказов</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/tokens">
                            <Icon type="dollar" style={{fontSize: '24px'}}/>
                            <span>Токены</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/api">
                            <Icon type="solution" style={{fontSize: '24px'}}/>
                            <span>API</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" onClick={this.props.logout}>
                        <Icon type="import" style={{fontSize: '24px'}}/>
                        <span>Выход</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navbar;