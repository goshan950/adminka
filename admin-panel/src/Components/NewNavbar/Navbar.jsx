import React from 'react';
import s from './Navbar.module.css';
import { Menu, Icon, Button } from 'antd';
import {NavLink} from "react-router-dom";

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
            <div style={{ width: 256 }}>
                <div className={s.collapseButton}>
                    <Button onClick={this.toggleCollapsed} style={{ marginBottom: 16, marginLeft: 20}} >
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <NavLink to="/profile">
                            <Icon type="user" style={{ fontSize: '26px' }} />
                            <span>Личный кабинет</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/table">
                            <Icon type="table" style={{ fontSize: '26px' }} />
                            <span>Таблица заказов</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/tokens">
                            <Icon type="dollar" style={{ fontSize: '26px' }}  />
                            <span>Токены</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <NavLink to="/exit">
                        <Icon type="import" style={{ fontSize: '26px' }}  />
                        <span>Выход</span>
                    </NavLink>
                </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navbar;