import React, {Component} from 'react';
import s from './Profile.module.css';
import {Button, Table, Input} from 'antd';
import {UserDataForm} from "./UserDataForm";
import userPhoto from './user.png'
import {CameraOutlined} from '@ant-design/icons';

const columns = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Сумма',
        dataIndex: 'money',
        key: 'money'
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status'
    },
];

const data = [
    {
        key: '1',
        date: '03.04.2020',
        money: '150р',
        status: 'Подтверждено'
    },
    {
        key: '2',
        date: '03.04.2020',
        money: '150р',
        status: 'Подтверждено'
    },
    {
        key: '3',
        date: '03.04.2020',
        money: '150р',
        status: 'Подтверждено'
    },
    {
        key: '4',
        date: '03.04.2020',
        money: '150р',
        status: 'Подтверждено'
    },
];

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
                            API ключ
                        </div>
                        <div className={s.tokenContent}>
                            <Input/>
                            <Button className={s.button}>Сгенерировать новый ключ</Button>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.blockTitle}>
                            Информация о подписке
                        </div>
                        <div className={s.infoContent}>
                                <p>Стоимость</p>
                                <p>Дата окончания (истекает через 23 дня)</p>
                                <Button className={s.button}>Продлить</Button>
                        </div>
                    </div>
                </div>

                <div className={s.table}>
                    <div className={s.tableTitle}>
                        История оплаты
                    </div>
                    <Table size="middle" columns={columns} bordered={true} dataSource={data} />
                </div>
            </div>
        );
    }
}

export default Profile;