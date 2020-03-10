import React, {Component} from 'react';
import s from './Header.module.css';
import {Avatar, Input} from 'antd';
import {InputNumber} from 'antd';
import {Menu, Modal, Button, Select, Dropdown, Icon} from 'antd';

function onChange(value) {
    console.log('changed', value);
}

const { confirm } = Modal;

function showConfirm() {
    confirm({
        title: 'Введите сумму',
        content: <InputNumber style={{width: 280}} min={0} max={100000} step={1} onChange={onChange}/>,
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

    render() {
        return (
            <header className={s.header}>
                <div className={s.container}>

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

                    <div className={s.balance}>
                        <Avatar shape="square" size={48} icon="user" style={{marginRight: 20}}/>
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="1">
                                    <Button type="link" onClick={showConfirm}>
                                        Пополнить
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        }>
                            <Button>
                                100 руб. <Icon type="down"/>
                            </Button>
                        </Dropdown>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;