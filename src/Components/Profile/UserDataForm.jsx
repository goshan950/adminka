import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 24,
    },
};

const { Option } = Select;

export const UserDataForm = () => {
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
                label="Эл. почта"
                name="email"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telegram"
                name="telegram"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Skype"
                name="skype"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="WhatsApp"
                name="whatsapp"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Viber"
                name="viber"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="ICQ"
                name="icq"
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="time"
                label="Час. пояс"
            >
                <Select>
                    <Option value="+8">+8</Option>
                    <Option value="+9">+7</Option>
                </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" style={{backgroundColor: '#6bbdff', border: 'none'}} htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    );
};
