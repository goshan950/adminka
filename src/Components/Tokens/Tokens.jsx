import React, {Component} from 'react';
import s from './Tokens.module.css';
import {Badge, Input, Button, Card} from "antd";

class Tokens extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.block}>
                    <Card style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="Токены">
                        <div className={s.content}>
                            <div className={s.token}>
                                <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                                <Badge count={<Button size="small">100р.</Button>} offset={[0, -5]}>
                                    <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                           offset={[0, 30]}>
                                        <Input/>
                                    </Badge>
                                </Badge>
                            </div>
                            <div className={s.token}>
                                <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                                <Badge count={<Button size="small">550р.</Button>} offset={[0, -5]}>
                                    <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                           offset={[0, 30]}>
                                        <Input/>
                                    </Badge>
                                </Badge>
                            </div>
                            <div className={s.token}>
                                <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                                <Badge count={<Button size="small">10р.</Button>} offset={[0, -5]}>
                                    <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                           offset={[0, 30]}>
                                        <Input/>
                                    </Badge>
                                </Badge>
                            </div>
                            <div className={s.token}>
                                <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                                <Badge count={<Button size="small">1000р.</Button>} offset={[0, -5]}>
                                    <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                           offset={[0, 30]}>
                                        <Input/>
                                    </Badge>
                                </Badge>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Tokens;