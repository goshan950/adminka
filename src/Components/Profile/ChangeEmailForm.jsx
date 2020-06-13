import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
    wrapperCol: {
        span: 24,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 20
    },
    justify: 'end',
};


export const ChangeEmailForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                name="newPas"
            >
                <Input placeholder={'Новый Пароль'}/>
            </Form.Item>

            <Form.Item
                name="newPas2"
            >
                <Input placeholder={'Подтвердите Пароль'}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" style={{backgroundColor: '#6bbdff', border: 'none'}} htmlType="submit">
                     Сменить пароль
                </Button>
            </Form.Item>
        </Form>
    );
};