import React, {Component} from 'react';
import s from './Header.module.css';
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Input} from 'antd';
import {InputNumber} from 'antd';
import { Menu, Modal, Button, Select, Dropdown } from 'antd';

function onChange(value) {
    console.log('changed', value);
}

const { confirm } = Modal;

function showConfirm() {
    confirm({
        title: 'Введите сумму',
        content: <InputNumber style={{width: 220}} min={0} max={100000} step={1} onChange={onChange}/>,
        okText: 'Пополнить',
        cancelText: 'Отмена',
        onOk() {
            console.log('ok');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

// select country
const { Option } = Select;

function onChangeCountry(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
// select country


class Header extends Component {

    //Modal number
    state = {
        modal1Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    //Modal number
    toggleCollapsed = () => {
        this.props.toggleNavCollapsed(!this.props.navCollapsed);
    };

    render() {
        return (
            <header className={s.header}>
                <div className={s.container}>
                    <span onClick={this.toggleCollapsed} className={s.collapseContainer}>
                        {React.createElement(this.props.navCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </span>
                    <img className={s.logo}
                         src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>
                    <div className={s.number}>
                        <Button block onClick={() => this.setModal1Visible(true)}>Получить номер</Button>
                    </div>
                    <Modal
                        style={{top: 20}}
                        okText={'Оплатить'}
                        cancelText={'Отмена'}
                        visible={this.state.modal1Visible}
                        onOk={() => this.setModal1Visible(false)}
                        onCancel={() => this.setModal1Visible(false)}
                    >
                        <Input placeholder={'Введите домен'} style={{marginTop: 20}}/>
                        <Select
                            showSearch
                            style={{width: 200, marginTop: 20}}
                            placeholder="Выберите страну"
                            optionFilterProp="children"
                            onChange={onChangeCountry}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="russia">Россия</Option>
                            <Option value="usa">США</Option>
                            <Option value="itali">Италия</Option>
                        </Select>
                    </Modal>

                    <div className={s.userContainer}>
                        <Avatar shape="square" className={s.ava} size={48} icon={<UserOutlined />}/>
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="1">
                                    <Button type="link" onClick={showConfirm}>
                                        Пополнить
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        }>
                            <span>
                                100 руб. <DownOutlined />
                            </span>
                        </Dropdown>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;