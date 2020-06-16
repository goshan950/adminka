import React, {Component} from 'react';
import s from './Profile.module.css';
import {Button, Table, Input, Progress, Card} from 'antd';
import {ChangeEmailForm} from "./Forms/ChangeEmailForm";
import userPhoto from '../../images/user.png'
import {CameraOutlined} from '@ant-design/icons';
import {UserDataForm} from "./Forms/UserDataForm";

const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        console.log(e.target.files[0]);
    }
}

class Profile extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.block}>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            Аккаунт
                        </div>
                        <div className={s.profile}>
                            <div className={s.userDataForm}>
                                <UserDataForm/>
                            </div>
                            <div className={s.photo}>
                                <img src={userPhoto} className={s.mainPhoto}/>
                                <label className={s.customFileUpload}>
                                    <input type={"file"} onChange={onMainPhotoSelected}/>
                                    <CameraOutlined />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            Сменить Пароль
                        </div>
                        <div className={s.profile}>
                            <div className={s.userDataForm}>
                                <ChangeEmailForm/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.block2}>
                    <div className={s.table}>
                        <div className={s.tableTitle}>
                            История оплаты
                        </div>
                    </div>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            Информация о подписке
                        </div>
                        <div className={s.infoContent}>
                            <Progress percent={75} status="active" format={percent => `${percent} Дней`} />
                        </div>
                    </div>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            Активировать Купон
                        </div>
                        <div className={s.tokenContent}>
                            <Input/>
                            <Button className={s.button}>Активировать</Button>
                        </div>
                    </div>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            API ключ
                        </div>
                        <div className={s.tokenContent}>
                            <Input/>
                            <Button className={s.button}>Сгенерировать новый ключ</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;