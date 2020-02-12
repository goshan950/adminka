import React from 'react';
import {Datatable} from "@o2xp/react-datatable";
import s from "../Table/MyTable.module.css";
import { chunk } from "lodash";

const options = {
    title: "Последние заказы",
    dimensions: {
        datatable: {
            width: "900px",
            height: "600px"
        },
        row: {
            height: "60px"
        }
    },
    keyColumn: "id",
    data: {
        columns: [
            {
                id: "id",
                label: "ID",
                colSize: "140px"
            },
            {
                id: "service",
                label: "Сервис",
                colSize: "60px",
                dataType: "text",
                inputType: "input"
            },
            {
                id: "site",
                label: "Сайт",
                colSize: "60px",
                dataType: "text"
            },
            {
                id: "sms",
                label: "SMS",
                colSize: "80px",
                dataType: "text",
                inputType: "input"
            },
            {
                id: "status",
                label: "Статус",
                colSize: "100px",
                dataType: "text",
                inputType: "input"
            },
            {
                id: "price",
                label: "Стоимость",
                colSize: "100px",
                dataType: "text"
            },
            {
                id: "number",
                label: "Номер",
                colSize: "110px",
                datatype: "number"
            },
            {
                id: "country",
                label: "Страна",
                colSize: "100px",
                datatype: "text"
            }
        ],
        rows: [
            {
                id: "50cq32523r23dff",
                service: "5sim",
                site: "vk",
                sms: "смс",
                status: "Отправлено",
                price: "2р",
                number: "+78005553535",
                country: "Россия"
            },
            {
                id: "50c4f34f34f3434f",
                service: "5sim",
                site: "vk",
                sms: "смс",
                status: "Отправлено",
                price: "3р",
                number: "+78005553535",
                country: "Россия"
            },
            {
                id: "5f34f3f34f3t3450cf",
                service: "5sim",
                site: "vk",
                sms: "смс",
                status: "Отправлено",
                price: "4р",
                number: "+78005553535",
                country: "Россия"
            },
            {
                id: "50c45g6gf",
                service: "5sim",
                site: "vk",
                sms: "смс",
                status: "Отправлено",
                price: "4р",
                number: "+78005553535",
                country: "Россия"
            },
            {
                id: "250cv456v3f",
                service: "5sim",
                site: "vk",
                sms: "смс",
                status: "Отправлено",
                price: "4р",
                number: "+78005553535",
                country: "Россия"
            }
        ]
    },
    features: {
        canEdit: false,
        canDelete: false,
        canDownload: true,
        canSearch: true,
        canRefreshRows: true,
        canOrderColumns: true,
        canSelectRow: false,
        canSaveUserConfiguration: true,
        userConfiguration: {
            columnsOrder: ["id", "service", "site", "sms", "status", "price", "number", "country"],
            copyToClipboard: true
        },
        rowsPerPage: {
            available: [10, 25, 50, 100],
            selected: 50
        }
    }
};

class MyTable extends React.Component {

    actionsRow = ({ type, payload }) => {
        console.log(type);
        console.log(payload);
    };

    refreshRows = () => {
        const { rows } = options.data;
        const randomRows = Math.floor(Math.random() * rows.length) + 1;
        const randomTime = Math.floor(Math.random() * 4000) + 1000;
        const randomResolve = Math.floor(Math.random() * 10) + 1;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (randomResolve > 3) {
                    resolve(chunk(rows, randomRows)[0]);
                }
                reject(new Error("err"));
            }, randomTime);
        });
    };

    render() {
        return (
            <div className={s.container}>
                <div className={s.info}>
                    <Datatable
                        options={options}
                        refreshRows={this.refreshRows}
                        actions={this.actionsRow}
                    />
                </div>
            </div>);
    }
}

export default MyTable;