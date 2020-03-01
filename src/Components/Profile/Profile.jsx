import React, {Component} from 'react';
import s from './Profile.module.css';
import {Button, Input} from 'antd';
import {Datatable} from "@o2xp/react-datatable";

let options  = {
    dimensions: {
        datatable: {
            width: "600px",
            height: "500px"
        },
        row: {
            height: "60px"
        }
    },
    keyColumn: 'id',
    data: {
        columns: [
            {
                id: "date",
                label: "Дата",
                colSize: "80px"
            },
            {
                id: "money",
                label: "Сумма",
                colSize: "50px"
            },
            {
                id: "status",
                label: "Статус",
                colSize: "50px"
            },
        ],
        rows: [
            {
                date: "29.07.2019",
                money: 280,
                status: "Подтверждено"
            },
            {
                date: "19.12.2019",
                money: 340,
                status: "Выполняется"
            },
            {
                date: "22.01.2020",
                money: 140,
                status: "Подтверждено"
            }
        ],
    }
};


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
                    <Datatable options={options} />
                </div>

            </div>
        );
    }
}

export default Profile;