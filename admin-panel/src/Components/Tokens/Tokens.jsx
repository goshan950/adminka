import React, {Component} from 'react';
import s from './Tokens.module.css';
import {Badge, Input} from "antd";

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
                            <Badge count={<div>100р.</div>} style={{backgroundColor: '#6ebdff' }} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' />
                            <Badge count={<div>10р.</div>} style={{backgroundColor: '#6ebdff' }} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' />
                            <Badge count={<div>245р.</div>} style={{backgroundColor: '#6ebdff' }} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' />
                            <Badge count={<div>1000р.</div>} style={{backgroundColor: '#6ebdff' }} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Tokens;