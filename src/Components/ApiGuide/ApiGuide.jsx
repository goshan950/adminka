import React, {useState} from 'react';
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

const ApiGuide = () => {
    const [tab, setTab] = useState('tab1');
        return (
                <Card
                    style={{ margin: '0 12px 24px 12px' }}
                    tabList={tabList}
                    activeTabKey={tab}
                    onTabChange={tab => {
                        setTab(tab);
                    }}
                >
                    {contentList[tab]}
                </Card>
        );
    }

export default ApiGuide;