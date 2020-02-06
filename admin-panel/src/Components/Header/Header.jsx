import React, {Component} from 'react';
import s from './Header.module.css';
import { Avatar } from 'antd';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.logoContainer}>
                        <img className={s.logo} src='https://groupmoney.ru/applications/core/interface/imageproxy/imageproxy.php?img=https://i.ibb.co/Wz1Dfwv/LOGO.png&key=ad3efe7dff457eacfb50937db83993445cc94cb84fdd143e63029891bdab8109' />
                    </div>
                    <div className={s.ava}>
                        <Avatar shape="square" size={52} icon="user" />
                        <div className={s.balance}>100 руб.</div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;