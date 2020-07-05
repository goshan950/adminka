import React from 'react';
import s from './Tokens.module.css';
import {Badge, Input, Button} from "antd";
import {BaseCard} from "../common/Blocks/CustomCards";

const Tokens = () => {
    return (
        <div className={s.container}>
            <BaseCard title="Токены" styles={{maxWidth: 800, flexGrow: 1}}>
                <div className={s.tokenContainer}>
                    <div className={s.tokenItem}>
                        <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                        <Badge count={<Button size="small">100р.</Button>} offset={[0, -5]}>
                            <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                   offset={[0, 30]}>
                                <Input/>
                            </Badge>
                        </Badge>
                    </div>
                    <div className={s.tokenItem}>
                        <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                        <Badge count={<Button size="small">550р.</Button>} offset={[0, -5]}>
                            <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                   offset={[0, 30]}>
                                <Input/>
                            </Badge>
                        </Badge>
                    </div>
                    <div className={s.tokenItem}>
                        <img src='https://sms-activate.ru/assets/img/logoBlack.png?1' alt='#'/>
                        <Badge count={<Button size="small">10р.</Button>} offset={[0, -5]}>
                            <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                   offset={[0, 30]}>
                                <Input/>
                            </Badge>
                        </Badge>
                    </div>
                    <div className={s.tokenItem}>
                        <img src='https://smshub.org/assets/ico/logo.png' alt='#'/>
                        <Badge count={<Button size="small">1000р.</Button>} offset={[0, -5]}>
                            <Badge count={<Button style={{backgroundColor: '#e6f7ff'}} size="small">+</Button>}
                                   offset={[0, 30]}>
                                <Input/>
                            </Badge>
                        </Badge>
                    </div>
                </div>
            </BaseCard>
        </div>
    );
}

export default Tokens;