import React, {Component} from 'react';
import s from './ApiGuide.module.css';
import {Card} from "antd";

const tabList = [
    {
        key: 'tab1',
        tab: 'АПИ-1',
    },
    {
        key: 'tab2',
        tab: 'АПИ-2',
    },
];

const contentList = {
    tab1: <p>Иформация 1</p>,
    tab2: <p>Иформация 2</p>,
};

class ApiGuide extends Component {

    state = {
        key: 'tab1',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        return (
            <div className={s.container}>
                <Card
                    style={{ width: '100%' }}
                    title="API"
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                >
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}

export default ApiGuide;