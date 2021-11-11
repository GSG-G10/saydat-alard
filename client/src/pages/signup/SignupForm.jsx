import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Form, Input, Button, message,
} from 'antd';
import http from '../../services/httpService';
import Img from '../../components/common/Img';
import ParagraphText from '../../components/common/Paragraph';
import HeaderTitle from '../../components/common/Title';
import './style.css';
import { AuthContext } from '../../context/AuthContext';
import map from '../../utils/images/map.png';

const postData = async (userInfo, cb) => {
  try {
    const data = await http.post('/api/v1/signup', userInfo);
    cb(data);
  } catch (error) {
    message.error(error);
  }
};

function SignupForm() {
  const history = useHistory();
  const { setUserData } = useContext(AuthContext);

  const { Password } = Input;
  const { Item } = Form;
  const onFinish = (values) => {
    const { confirmPassword, password } = values;
    if (confirmPassword === password) {
      postData(values, ({ data }) => {
        const { id, isAdmin, name } = data;
        setUserData({ id, role: isAdmin, name });
        history.push('/');
      });
    } else message.warning('كلمتا المرور غير متطابقتان ');
  };
  return (
    <div className="signupContainer">

      <div className="signup">
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
          <Item
            name="name"
            rules={[{ required: true, message: 'اسم المستخدم مطلوب' }]}
          >
            <Input placeholder="اسم المستخدم " className="signupInput" />
          </Item>
          <Item
            name="email"
            rules={[{ required: true, message: 'البريد الإلكتروني مطلوب' }]}
          >
            <Input placeholder=" البريد الإلكتروني  " className="signupInput" />
          </Item>

          <Item
            placeholder="كلمة المرور "
            name="password"
            rules={[{ required: true, message: 'كلمة المرور مطلوبة' }]}
          >
            <Password placeholder=" كلمة المرور " className="signupInput" />
          </Item>
          <Item
            name="confirmPassword"
            rules={[{ required: true, message: '  تأكيد كلمة المرور مطلوبة' }]}
          >
            <Password placeholder=" تأكيد كلمة المرور " className="signupInput" />
          </Item>
          <Item
            name="originalCity"
            rules={[{ required: true, message: '  البلدة الأصلية مطلوبة' }]}
          >
            <Input placeholder="  البلدة الأصلية   " className="signupInput" />
          </Item>

          <Item wrapperCol={{ offset: 8, span: 16 }}>
            <div className="signupBtns">
              <Button type="primary" htmlType="submit" className="signupSubmit signupBtn">
                إنشاء حساب
              </Button>
              <Link to="/" className="homePageButton signupBtn"> الصفحة الرئيسية </Link>

            </div>
          </Item>
          <div className="signupRedirect">
            <ParagraphText text="هل تمتلك حساب ؟" strong={false} />
            <Link to="/signup" className="loginLink">تسجيل الدخول</Link>
          </div>
        </Form>
        <Img
          src={map}
          alt="palestine map"
          styleClass="map"
        />
      </div>
    </div>
  );
}

export default SignupForm;
