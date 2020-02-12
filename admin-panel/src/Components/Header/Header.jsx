import React, {Component} from 'react';
import s from './Header.module.css';
import {Avatar} from 'antd';
import {InputNumber} from 'antd';
import {Menu, Modal, Button, Dropdown, Icon} from 'antd';

function onChange(value) {
    console.log('changed', value);
}

const { confirm } = Modal;

function showConfirm() {
    confirm({
        title: 'Введите сумму',
        content: <InputNumber min={0} max={100000} step={1} onChange={onChange}/>,
        okText: 'Пополнить',
        cancelText: 'Отмена',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}


class Header extends Component {

    render() {
        return (
            <header className={s.header}>
                <div className={s.container}>
                    <img className={s.logo}
                         src='https://kopeechka.store/tpl/panel/img/logo.svg'/>
                    <div className={s.ava}>
                        <Avatar shape="square" size={48} icon="user" style={{marginRight: 20}}/>
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="1">
                                    <Button  type="link" onClick={showConfirm}>
                                        Пополнить
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        }>
                            <Button>
                                100 руб. <Icon type="down"/>
                            </Button>
                        </Dropdown>

                        {/*<Drawer title="Введите сумму" placement="right" closable={false} onClose={this.onClose}*/}
                        {/*        visible={this.state.visible}>*/}
                        {/*    <InputNumber min={0} max={100000} step={1} onChange={onChange}/>*/}
                        {/*    <div>*/}
                        {/*        <Button className={s.button} type="primary">Пополнить баланс</Button>*/}
                        {/*    </div>*/}
                        {/*</Drawer>*/}

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;