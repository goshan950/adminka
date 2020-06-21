import React from 'react';
import s from './Profile.module.css';
import {Input, Progress} from 'antd';
import {ChangeEmailForm} from "./Forms/ChangeEmailForm";
import userPhoto from '../../images/user.png'
import {CameraOutlined} from '@ant-design/icons';
import {UserDataForm} from "./Forms/UserDataForm";
import {HistoryTable} from "./HistoryTable";
import {BaseCard} from "../common/Blocks/CustomCards";
import {LightButton} from "../common/Buttons/CustomButtons";

const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        console.log(e.target.files[0]);
    }
}

const Profile = () => {
    return (
        <div className={s.container}>
            <div className={s.block}>
                <BaseCard title='Аккаунт'>
                    <div className={s.photoContainer}>
                        <img src={userPhoto} alt='#' className={s.userPhoto}/>
                        <label className={s.customFileUpload}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                            <CameraOutlined/>
                        </label>
                    </div>
                    <UserDataForm/>
                </BaseCard>
                <BaseCard title="Сменить Пароль">
                    <ChangeEmailForm/>
                </BaseCard>
            </div>

            <div className={s.block}>
                <BaseCard bodyStyle={{paddingBottom: 0}} title="История оплаты">
                    <HistoryTable/>
                </BaseCard>
                <BaseCard title="Информация о подписке">
                    <Progress percent={75} style={{paddingRight: 24}} status="active" format={percent => `${percent} Дней`}/>
                </BaseCard>
                <BaseCard title="Активировать Купон">
                    <Input/>
                    <LightButton styles={{marginTop: 12, float: 'right'}}>Активировать</LightButton>
                </BaseCard>
                <BaseCard title="API ключ">
                    <Input/>
                    <LightButton styles={{marginTop: 12, float: 'right'}}>Сгенерировать новый ключ</LightButton>
                </BaseCard>
            </div>
        </div>
    );
}

export default Profile;