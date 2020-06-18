import React from 'react';
import s from './Profile.module.css';
import {Button, Input, Progress} from 'antd';
import {ChangeEmailForm} from "./Forms/ChangeEmailForm";
import userPhoto from '../../images/user.png'
import {CameraOutlined} from '@ant-design/icons';
import {UserDataForm} from "./Forms/UserDataForm";
import {HistoryTable} from "./HistoryTable";
import {CustomCard} from "../common/Blocks/CustomCard";

const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        console.log(e.target.files[0]);
    }
}

const Profile = () => {
    return (
        <div className={s.container}>
            <div className={s.block}>
                <CustomCard title='Аккаунт'>
                    <div className={s.photo}>
                        <img src={userPhoto} alt='#' className={s.mainPhoto}/>
                        <label className={s.customFileUpload}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                            <CameraOutlined/>
                        </label>
                    </div>
                    <UserDataForm/>
                </CustomCard>
                <CustomCard title="Сменить Пароль">
                    <ChangeEmailForm/>
                </CustomCard>
            </div>

            <div className={s.block2}>
                <CustomCard bodyStyle={{paddingBottom: 0}} title="История оплаты">
                    <HistoryTable/>
                </CustomCard>
                <CustomCard title="Информация о подписке">
                    <Progress percent={75} style={{paddingRight: 24}} status="active" format={percent => `${percent} Дней`}/>
                </CustomCard>
                <CustomCard title="Активировать Купон">
                    <Input/>
                    <Button type={"primary"} style={{backgroundColor: "#40a9ff", border: 'none'}} className={s.button}>Активировать</Button>
                </CustomCard>
                <CustomCard title="API ключ">
                    <Input/>
                    <Button type={"primary"} style={{backgroundColor: "#40a9ff", border: 'none'}} className={s.button}>Сгенерировать новый ключ</Button>
                </CustomCard>
            </div>
        </div>
    );
}

export default Profile;