import React, {Component} from 'react';
import s from './Tokens.module.css';

class Tokens extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.head}>
                        <div>
                            Токены
                        </div>
                    </div>

                    <div className={s.content}>
                        <div className={s.token}>
                            <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' />
                            <input />
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' />
                            <input />
                        </div>
                        <div className={s.token}>
                            <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' />
                            <input />
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' />
                            <input />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Tokens;