import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Form, Input, Button,
  message,
} from 'antd';
import Img from '../../components/common/Img';
import flower from '../../utils/images/flower.png';
import './login.css';
import http from '../../services/httpService';
import { AuthContext } from '../../context/AuthContext';

const { Item } = Form;
const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const history = useHistory();
  const { setUserData } = useContext(AuthContext);
  const sendRequest = async () => {
    try {
      if (value.email && value.password.length > 6) {
        const response = await http.post('/api/v1/login', value);
        if (response) {
          setUserData(response.data);
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
        <div><Img styleClass="loginImg" src={flower} alt="flower" /></div>
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
            <Item
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
            </Item>

            <Item
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
            </Item>

            <Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            />

            <Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >

              <div className="btn">
                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderRadius: '5px' }}>
                  تسجيل لدخول
                </Button>
                <Link to="/" style={{ borderRadius: '5px', border:'1px solid green', padding:'0px 10px',color:'green' }}>
                  الصفحة الرئيسية
                </Link>
              </div>

            </Item>

          </Form>
          <div className="loginLinks">
            <Link to="/signup">
              إنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
