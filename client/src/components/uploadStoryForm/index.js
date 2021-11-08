import React, { useState } from 'react';
import {
  Modal, Input, Form, message,
} from 'antd';
import PropTypes from 'prop-types';
import './styles.css';
import { useParams } from 'react-router-dom';
import httpService from '../../services/httpService';
import previewFile from '../../utils';
import Img from '../common/Img';

const { TextArea } = Input;
function StoryForm({ visible, setVisible }) {
  const [previewSource, setPreviewSource] = useState('');
  const { id } = useParams();
  const [form] = Form.useForm();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file, setPreviewSource);
  };

  const uploadImage = async (body) => {
    try {
      const { data } = await httpService.post('/api/v1/story', body,
        { headers: { 'Content-Type': 'application/json' } });
      setVisible(false);
      message.success(data.message);
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <Modal
      title="اضف قصتك"
      centered
      visible={visible}
      okText="موافق"
      cancelText="الغاء"
      onCancel={() => setVisible(false)}
      width={500}
      onOk={() => {
        form
          .validateFields()
          .then(({ title, content }) => {
            form.resetFields();
            uploadImage({
              data: previewSource, title, content, cityId: id,
            });
          })
          .catch((err) => {
            message.error(err);
          });
      }}
      style={{ padding: '20px' }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: 'يجب إدخال عنوان لقصتك',
            },
          ]}
        >

          <Input
            placeholder="العنوان"
          />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: 'يجب إدخال محتوى لقصتك',
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="القصة"
          />
        </Form.Item>
        <Form.Item
          name="data"
          rules={[
            {
              required: true,
              message: 'يجب تحميل صورة لقصتك',
            },
          ]}
        >

          <label htmlFor="file" className="custom-file-upload">
            <input
              type="file"
              id="file"
              onChange={handleFileInputChange}
            />
            إضـــــافة صورة
          </label>
        </Form.Item>

      </Form>
      {previewSource && (
      <Img
        src={previewSource}
        alt="chosen"
        styleClass="prv-img"
      />
      )}
    </Modal>
  );
}

StoryForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default StoryForm;
