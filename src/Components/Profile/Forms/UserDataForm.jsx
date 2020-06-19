import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import {LightButton} from "../../common/Buttons/CustomButtons";

const layout = {
    labelCol: {
        flex: '80px',
    },

    wrapperCol: {
        flex: "auto",
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 20
    },
    justify: 'end',
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
            name="userData"
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

            <Form.Item style={{marginBottom: 0}} {...tailLayout}>
                <LightButton htmlType="submit">
                    Сохранить
                </LightButton>
            </Form.Item>
        </Form>
    );
};