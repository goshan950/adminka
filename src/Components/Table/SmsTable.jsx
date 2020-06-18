import React from 'react';
import {Table, Input, Button, Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
    {
        key: '1',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "vk",
        sms: "смс",
        status: "Получено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
        balance: '4'
    },
    {
        key: '2',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "vk",
        sms: "смс",
        status: "Отправлено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
        balance: '4'
    },
    {
        key: '3',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "yandex",
        sms: "смс",
        status: "Отправлено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
        balance: '4'
    },
];

class SmsTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Поиск`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Поиск
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Сброс
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                ...this.getColumnSearchProps('id'),
            },
            {
                title: 'Сервис',
                dataIndex: 'service',
                filters: [
                    {
                        text: '5sim',
                        value: '5sim',
                    },
                ],
                onFilter: (value, record) => record.service.indexOf(value) === 0,
            },
            {
                title: 'Сайт',
                dataIndex: 'site',
                filters: [
                    {
                        text: 'vk.ru',
                        value: 'vk',
                    },
                    {
                        text: 'yandex.ru',
                        value: 'yandex',
                    },
                ],
                onFilter: (value, record) => record.site.indexOf(value) === 0,
            },
            {
                title: 'SMS',
                dataIndex: 'sms',
                ...this.getColumnSearchProps('service'),
            },
            {
                title: 'Статус',
                dataIndex: 'status',
                sorter: (a, b) => a.status.length - b.status.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Стоимость',
                dataIndex: 'price',
            },
            {
                title: 'Номер',
                dataIndex: 'number',
                ...this.getColumnSearchProps('number'),
            },
            {
                title: 'Страна',
                dataIndex: 'country',
                ...this.getColumnSearchProps('country'),
            },
            {
                title: 'Остаточный баланс сервиса',
                dataIndex: 'balance',
                width: 140,
            },
        ];

        return (
                <Table style={{backgroundColor: "white", boxShadow: '0 1px 4px rgba(0,21,41,.08)', margin: '0 12px 24px 12px'}}
                       scroll={{ x: 'max-content' }}
                       bordered={true}
                       columns={columns} dataSource={data}/>
        )
    }
}


export default SmsTable;