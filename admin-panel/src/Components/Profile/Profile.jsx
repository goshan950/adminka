import React, {Component} from 'react';
import s from './Profile.module.css';
import { Table, Button } from 'antd';

const columns = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Сумма',
        dataIndex: 'money',
        key: 'money',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
];

const data = [
    {
        key: '1',
        date: '02.08.2020',
        money: '100р.',
        status: 'Подтверждено',
    },
    {
        key: '2',
        date: '01.08.2020',
        money: '150р.',
        status: 'Подтверждено',
    },
    {
        key: '3',
        date: '01.08.2020',
        money: '200р.',
        status: 'Подтверждено',
    },
    {
        key: '4',
        date: '01.08.2020',
        money: '200р.',
        status: 'Подтверждено',
    },
    {
        key: '5',
        date: '01.08.2020',
        money: '200р.',
        status: 'Подтверждено',
    },
    {
        key: '6',
        date: '01.08.2020',
        money: '200р.',
        status: 'Подтверждено',
    },
];

class Profile extends Component {
    render() {
        return (
            <div className={s.container}>

                <div className={s.block}>
                    <div className={s.token}>
                        <div className={s.blockTitle}>
                            API ключ
                        </div>
                        <div className={s.tokenContent}>
                            <input />
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
                    <Table style={{marginLeft: 20, marginBottom: 20, marginRight: 20}} columns={columns} dataSource={data}/>
                </div>

            </div>
        );
    }
}

export default Profile;