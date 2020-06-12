import React from 'react';

import {
    DollarOutlined,
    ImportOutlined,
    PlusOutlined,
    SolutionOutlined,
    TableOutlined,
    UserOutlined,
} from '@ant-design/icons';

import {NavLink} from "react-router-dom";
import s from './NavbarMobile.module.css';

class NavbarMobile extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
                    <UserOutlined style={{fontSize: '26px'}} />
                </NavLink>
                <NavLink to="/number" className={s.item} activeClassName={s.activeLink}>
                    <PlusOutlined style={{fontSize: '26px'}} />
                </NavLink>
                <NavLink to="/table" className={s.item} activeClassName={s.activeLink}>
                    <TableOutlined style={{fontSize: '26px'}} />
                </NavLink>
                <NavLink to="/tokens" className={s.item} activeClassName={s.activeLink}>
                     <DollarOutlined style={{fontSize: '26px'}} />
                </NavLink>
                <NavLink to="/api" className={s.item} activeClassName={s.activeLink}>
                    <SolutionOutlined style={{fontSize: '26px'}} />
                </NavLink>
                <div className={s.item} onClick={this.props.logout}>
                    <ImportOutlined style={{fontSize: '26px'}} />
                </div>
            </div>
        );
    }
}

export default NavbarMobile;