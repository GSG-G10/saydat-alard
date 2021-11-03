import React, { useEffect } from 'react';
import {
  Form, Input, Button,
} from 'antd';
import httpService from '../services/httpService';
import Img from './common/Img';

function SignupForm() {
  // const [userInfo, setuserInfo] = useState({});
  const onFinish = (values) => {
    console.log(values);
    const { confirmPassword, password } = values;
    if (confirmPassword === password) {
      // await httpService.post()
    }
  };
  useEffect(() => {

  }, []);

  return (
    <div className="signup">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 7 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        className="signup-form"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'اسم المستخدم مطلوب' }]}
        >
          <Input placeholder="اسم المستخدم " />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'البريد الإلكتروني مطلوب' }]}
        >
          <Input placeholder=" البريد الإلكتروني  " />
        </Form.Item>

        <Form.Item
          placeholder="كلمة المرور "
          name="password"
          rules={[{ required: true, message: 'كلمة المرور مطلوبة' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: '  تأكيد كلمة المرور مطلوبة' }]}
        >
          <Input.Password placeholder=" تأكيد كلمة المرور " />
        </Form.Item>
        <Form.Item
          name="originalCity"
          rules={[{ required: true, message: '  البلدة الأصلية مطلوبة' }]}
        >
          <Input placeholder="  البلدة الأصلية   " />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Img
        src="/map.png"
        alt="palestine map"
        styleClass="map"
      />
    </div>
  );
}

export default SignupForm;
