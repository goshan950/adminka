import React from 'react';
import {Button, Input, Card} from 'antd';
import {NumberForm} from "./NumberForm";

const Number = () => {
    return (
        <Card headStyle={{backgroundColor: '#F9F9F9'}}
              style={{margin: '0 12px 24px 12px', border: "none", boxShadow: "0 1px 4px rgba(0,21,41,.08)"}}
              title="Полчить номер">
            <NumberForm/>
        </Card>
    )
}
export default Number;