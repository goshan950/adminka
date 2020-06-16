import {Table} from "antd";
import React from "react";

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

export const HistoryTable = () => {
    return <Table size="middle" columns={columns} bordered={true} dataSource={data} />
}