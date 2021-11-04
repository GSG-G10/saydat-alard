import React, { useState } from 'react';
import {
  Modal, Button, Input, message,Form,
} from 'antd';
import './proverb.css';
import http from '../../services/httpService';
import PropTypes from 'prop-types';

function Addproverbs({visible, setVisible}) {
  const [form] = Form.useForm();

  const sendProverb = async (values) => {
    try {
        const proverb = await http.post('/api/v1/proverb', values);
        message.success(proverb.response.data.message);
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  return (
      <Modal
        title="أضف المثل"
        centered
        visible={visible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              sendProverb(values);
            })
            .catch((info) => {
              massage.error(info);
            });
        }}
        onCancel={() => setVisible(false)}
        width={1000}
        okText='إضــــافة'
        cancelText='إلغــــاء'
      >
        <Form 
        form = {form}
        className="proverbcontainer">
          <Form.Item
           name="proverb"
           label="أضف هنا المثال"
           rules={[
             {
               required:true,
               message: 'يجب عليك إضافة مثل',
             },
           ]}>
            <Input type="text" placeholder='أضف هنا المثل' className="input" required />
            </Form.Item>
        </Form>
      </Modal>
  );
}
Addproverbs.propType = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
}

export default Addproverbs;
