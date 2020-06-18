import React from 'react';
import {Form, Input, Button, Select} from 'antd';

const { Option } = Select;

const tailLayout = {
    wrapperCol: {
        offset: 20
    },
    justify: 'end',
};

export const NumberForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="number"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                name="domain"
                label="Домен"
            >
                <Input placeholder={'Yandex.ru'}/>
            </Form.Item>

            <Form.Item
                label="Страна"
                name="country"
            >
                <Select>
                    <Option value="CША">CША</Option>
                    <Option value="russia">Россия</Option>
                </Select>
            </Form.Item>

            <Form.Item style={{marginBottom: 0}} {...tailLayout}>
                <Button type={"primary"} style={{backgroundColor: "#40a9ff", border: 'none'}} htmlType="submit">
                     Оплатить
                </Button>
            </Form.Item>
        </Form>
    );
};