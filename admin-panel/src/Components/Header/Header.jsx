import React, {Component} from 'react';
import s from './Header.module.css';
import {Avatar} from 'antd';
import {InputNumber} from 'antd';
import {Menu, Drawer, Button, Dropdown, Icon} from 'antd';

function onChange(value) {
    console.log('changed', value);
}

class Header extends Component {
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <header className={s.header}>
                <div className={s.container}>
                    <img className={s.logo}
                         src='https://kopeechka.store/tpl/panel/img/logo.svg'/>
                    {/*src='https://groupmoney.ru/applications/core/interface/imageproxy/imageproxy.php?img=https://i.ibb.co/Wz1Dfwv/LOGO.png&key=ad3efe7dff457eacfb50937db83993445cc94cb84fdd143e63029891bdab8109'/>*/}
                    <div className={s.ava}>
                        <Avatar shape="square" size={48} icon="user" style={{marginRight: 20}}/>
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="1">
                                    <Button  type="link" onClick={this.showDrawer}>
                                        Пополнить
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        }>
                            <Button>
                                100 руб. <Icon type="down"/>
                            </Button>
                        </Dropdown>
                        <Drawer title="Введите сумму" placement="right" closable={false} onClose={this.onClose}
                                visible={this.state.visible}>
                            <InputNumber min={0} max={100000} step={1} onChange={onChange}/>
                            <div>
                                <Button className={s.button} type="primary">Пополнить баланс</Button>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;