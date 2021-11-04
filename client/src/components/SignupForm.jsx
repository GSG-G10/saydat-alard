import React, { useState } from 'react';
import {
  Form, Input, Button, message,
} from 'antd';
import { Link } from 'react-router-dom';
import httpService from '../services/httpService';
import Img from './common/Img';
import ParagraphText from './common/Paragraph';
import HeaderTitle from './common/Title';
import 'antd/dist/antd.css';
import './signup.css';

function SignupForm() {
  const [errorMsg, setErrorMsg] = useState('');
  const errorlert = (erroMsg) => {
    message.error(erroMsg);
  };
  const postData = async (userInfo) => {
    try {
      const { msg } = await httpService.post('/api/v1/signup', userInfo);
      setErrorMsg(msg);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const onFinish = (values) => {
    const { confirmPassword, password } = values;
    if (confirmPassword === password) {
      postData(values);
    }
  };
  return (
    <div className="signupContainer">

      <div className="signup">
        {errorMsg ? errorlert(errorMsg) : ''}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 7 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          className="signupForm"
        >
          <HeaderTitle text="إنشاء حساب" level={2} className="signupTitle" />
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'اسم المستخدم مطلوب' }]}
          >
            <Input placeholder="اسم المستخدم " className="signupInput" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'البريد الإلكتروني مطلوب' }]}
          >
            <Input placeholder=" البريد الإلكتروني  " className="signupInput" />
          </Form.Item>

          <Form.Item
            placeholder="كلمة المرور "
            name="password"
            rules={[{ required: true, message: 'كلمة المرور مطلوبة' }]}
          >
            <Input.Password placeholder=" كلمة المرور " className="signupInput" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: '  تأكيد كلمة المرور مطلوبة' }]}
          >
            <Input.Password placeholder=" تأكيد كلمة المرور " className="signupInput" />
          </Form.Item>
          <Form.Item
            name="originalCity"
            rules={[{ required: true, message: '  البلدة الأصلية مطلوبة' }]}
          >
            <Input placeholder="  البلدة الأصلية   " className="signupInput" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="signupSubmit signupBtn">
              إنشاء حساب
            </Button>
            <Button type="primary" htmlType="submit" className="homePageButton signupBtn">
              الصفحة الرئيسية
            </Button>
          </Form.Item>
          <div className="signupRedirect">
            <ParagraphText text="هل تمتلك حساب ؟" strong={false} />
            <Link to="/api/v1/signup" className="loginLink">تسجيل الدخول</Link>
          </div>
        </Form>
        <Img
          src="/map.png"
          alt="palestine map"
          styleClass="map"
        />
      </div>
    </div>
  );
}

export default SignupForm;
