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
import s from './NavBarMobile.module.css';

const NavBarMobile = ({logout}) => {

  return (
      <div className={s.container}>
        <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
          <UserOutlined style={{fontSize: '26px'}}/>
        </NavLink>
        <NavLink to="/number" className={s.item} activeClassName={s.activeLink}>
          <PlusOutlined style={{fontSize: '26px'}}/>
        </NavLink>
        <NavLink to="/table" className={s.item} activeClassName={s.activeLink}>
          <TableOutlined style={{fontSize: '26px'}}/>
        </NavLink>
        <NavLink to="/tokens" className={s.item} activeClassName={s.activeLink}>
          <DollarOutlined style={{fontSize: '26px'}}/>
        </NavLink>
        <NavLink to="/api" className={s.item} activeClassName={s.activeLink}>
          <SolutionOutlined style={{fontSize: '26px'}}/>
        </NavLink>
        <div className={s.item} onClick={logout}>
          <ImportOutlined style={{fontSize: '26px'}}/>
        </div>
      </div>
  );
}

export default NavBarMobile;