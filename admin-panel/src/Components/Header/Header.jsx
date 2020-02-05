import React, {Component} from 'react';
import s from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <img className={s.logo} src='https://groupmoney.ru/applications/core/interface/imageproxy/imageproxy.php?img=https://i.ibb.co/Wz1Dfwv/LOGO.png&key=ad3efe7dff457eacfb50937db83993445cc94cb84fdd143e63029891bdab8109' />
                <div className={s.ava}>
                    <img src='https://web-orbita.com/numbers/img/notavatar.jpg'/>
                    <div className={s.balance}>100 руб.</div>
                </div>
            </header>
        );
    }
}

export default Header;