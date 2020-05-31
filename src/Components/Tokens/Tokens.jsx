import React, {Component} from 'react';
import s from './Tokens.module.css';
import {Badge, Input, Button} from "antd";

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
                            <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                            <Badge count={<Button size="small">100р.</Button>} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                            <Badge count={<Button size="small">550р.</Button>} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                            <Badge count={<Button size="small">10р.</Button>} offset={[0, -5]}>
                                <Input/>
                            </Badge>
                        </div>
                        <div className={s.token}>
                            <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                            <Badge count={<Button size="small">1000р.</Button>} offset={[0, -5]}>
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