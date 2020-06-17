import React, {Component} from 'react';
import s from './ProfileNew.module.css';
import {Button, Input, Progress, Card} from 'antd';
import {ChangeEmailForm} from "./Forms/ChangeEmailForm";
import userPhoto from '../../images/user.png'
import {CameraOutlined} from '@ant-design/icons';
import {UserDataForm} from "./Forms/UserDataForm";
import {HistoryTable} from "./HistoryTable";

const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        console.log(e.target.files[0]);
    }
}

const Profile = () => {
    return (
        <div className={s.container}>
            <div className={s.block}>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="Аккаунт">
                    <div className={s.photo}>
                        <img src={userPhoto} className={s.mainPhoto}/>
                        <label className={s.customFileUpload}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                            <CameraOutlined/>
                        </label>
                    </div>
                    <UserDataForm/>
                </Card>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="Сменить Пароль">
                    <ChangeEmailForm/>
                </Card>
            </div>

            <div className={s.block2}>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} bodyStyle={{paddingBottom: 0}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="История оплаты">
                    <HistoryTable/>
                </Card>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="Информация о подписке">
                    <Progress percent={75} style={{paddingRight: 24}} status="active" format={percent => `${percent} Дней`}/>
                </Card>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="Активировать Купон">
                    <Input/>
                    <Button className={s.button}>Активировать</Button>
                </Card>
                <Card headStyle={{backgroundColor: '#F9F9F9'}} style={{margin: 12, border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}} title="API ключ">
                    <Input/>
                    <Button className={s.button}>Сгенерировать новый ключ</Button>
                </Card>
            </div>
        </div>
    );
}

export default Profile;