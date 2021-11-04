import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Input, Button,
  message,
} from 'antd';
import flower from './img/flower.png';
import './login.css';
import http from '../services/httpService';

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const history = useHistory();
  const sendRequest = async () => {
    try {
      if (value.email && value.password.length > 6) {
        const response = await http.post('api/v1/login', value);
        if (response) {
          message.success('تم تسجيل الدخول بنجاح');
          history.push('/');
        }
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  const onFinish = (values) => {
    setValue(values);
    sendRequest();
  };
  return (
    <div className="container">
      <div className="loginContainer">
        <div><img className="loginImg" src={flower} alt="flower" /></div>
        <div className="formLogin">
          <h1>تسجيـــل الــدخول</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="البريد الإلكتروني"
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: '!الرجاء ادخال البريد الإلكتروني',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="كلمة المرور"
              name="password"
              rules={[
                {
                  required: true,
                  message: '!الرجاء ادخال كلمة المرور',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            />

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div className="btn">
                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderRadius: '5px' }}>
                  تسجيل لدخول
                </Button>
                <Button type="secondary" htmlType="submit" style={{ borderRadius: '5px' }}>
                  الصفحة الرئيسية
                </Button>
              </div>

            </Form.Item>

          </Form>
          <div className="loginLinks">
            <a href="/signup">
              إنشاء حساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
