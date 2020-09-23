import React, {useState} from 'react';
import s from './Header.module.css';
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Input} from 'antd';
import {InputNumber} from 'antd';
import { Menu, Modal, Button, Select, Dropdown } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {toggleNavCollapsed} from "../../redux/app-reducer";

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

const Header = () => {
    const dispatch = useDispatch();
    const navCollapsed = useSelector(state => state.app.navCollapsed);
    const [modal1Visible, setModal1Visible] = useState(false)

    const toggleCollapsed = () => {
        dispatch(toggleNavCollapsed(!navCollapsed));
    };

    return (
        <header className={s.header}>
            <span onClick={toggleCollapsed} className={s.collapseBlock}>
                {React.createElement(navCollapsed
                    ? MenuUnfoldOutlined
                    : MenuFoldOutlined)}
            </span>
            <img className={s.logo}
                 src='https://kopeechka.store/tpl/panel/img/logo.svg' alt='#'/>
            <div className={s.number}>
                <Button block onClick={() => setModal1Visible(true)}>Получить номер</Button>
            </div>
            <Modal
                style={{top: 20}}
                okText={'Оплатить'}
                cancelText={'Отмена'}
                visible={modal1Visible}
                onOk={() => setModal1Visible(false)}
                onCancel={() => setModal1Visible(false)}>
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
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="russia">Россия</Option>
                    <Option value="usa">США</Option>
                    <Option value="itali">Италия</Option>
                </Select>
            </Modal>
            <div className={s.userContainer}>
                <Avatar shape="square" className={s.ava} size={48} icon={<UserOutlined/>}/>
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item key="1">
                            <Button type="link" onClick={showConfirm}>
                                Пополнить
                            </Button>
                        </Menu.Item>
                    </Menu>
                }>
                    <span className={s.balance}>
                        100 руб. <DownOutlined/>
                    </span>
                </Dropdown>
            </div>
        </header>
    );
}

export default Header;