import React from 'react';
import {
  Modal, Input, message, Form,
} from 'antd';
import PropTypes from 'prop-types';
import http from '../../services/httpService';

function Addproverbs({ visible, setVisible }) {
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
            message.error(info);
          });
      }}
      onCancel={() => setVisible(false)}
      width={500}
      okText="إضــــافة"
      cancelText="إلغــــاء"
    >
      <Form
        form={form}
        className="proverbcontainer"
      >
        <Form.Item
          name="proverb"
          label="أضف هنا المثال"
          rules={[
            {
              required: true,
              message: 'يجب عليك إضافة مثل',
            },
          ]}
        >
          <Input type="text" placeholder="أضف هنا المثل" className="input" required />
        </Form.Item>
      </Form>
    </Modal>
  );
}
Addproverbs.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default Addproverbs;
