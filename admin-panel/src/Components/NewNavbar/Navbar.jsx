import React from 'react';
import { Menu, Icon, Button } from 'antd';
import 'antd/dist/antd.css';
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
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
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
                            <Icon type="user" />
                            <span>Личный кабинет</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/table">
                            <Icon type="table" />
                            <span>Таблица заказов</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/tokens">
                            <Icon type="dollar" />
                            <span>Токены</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navbar;