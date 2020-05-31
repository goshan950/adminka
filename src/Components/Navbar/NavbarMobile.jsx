import React from 'react';
import {Icon} from 'antd';
import {NavLink} from "react-router-dom";
import s from './NavbarMobile.module.css';

class NavbarMobile extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
                    <Icon type="user" style={{fontSize: '26px'}}/>
                </NavLink>
                <NavLink to="/number" className={s.item} activeClassName={s.activeLink}>
                    <Icon type="plus" style={{fontSize: '26px'}}/>
                </NavLink>
                <NavLink to="/table" className={s.item} activeClassName={s.activeLink}>
                    <Icon type="table" style={{fontSize: '26px'}}/>
                </NavLink>
                <NavLink to="/tokens" className={s.item} activeClassName={s.activeLink}>
                     <Icon type="dollar" style={{fontSize: '26px'}}/>
                </NavLink>
                <NavLink to="/api" className={s.item} activeClassName={s.activeLink}>
                    <Icon type="solution" style={{fontSize: '26px'}}/>
                </NavLink>
                <div className={s.item} onClick={this.props.logout}>
                    <Icon type="import" style={{fontSize: '26px'}}/>
                </div>
            </div>
        );
    }
}

export default NavbarMobile;