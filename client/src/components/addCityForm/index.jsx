import React, { useState } from 'react';
import {
  Modal, Input, Form, message,
} from 'antd';
import PropTypes from 'prop-types';
// import './styles.css';
// import { useParams } from 'react-router-dom';
import httpService from '../../services/httpService';
import previewFile from '../../utils';
import Img from '../common/Img';
import { apiEndPoint } from '../../services/config.json';

function CityForm({ visible, setVisible }) {
  const [previewSource, setPreviewSource] = useState('');

  const [form] = Form.useForm();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file, setPreviewSource);
  };

  const uploadImage = async (body) => {
    try {
      const { data } = await httpService.post(
        `${apiEndPoint}/dashboard/city`,
        body,
        { headers: { 'Content-Type': 'application/json' } },
      );
      setVisible(false);
      message.success(data.message);
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <Modal
      title="اضف مدينة"
      centered
      visible={visible}
      okText="إضافة"
      cancelText="إلغاء"
      onCancel={() => setVisible(false)}
      width={600}
      onOk={() => {
        form
          .validateFields()
          .then(({
            cityName, location, area, quotation,
          }) => {
            form.resetFields();
            uploadImage({
              image: previewSource,
              cityName,
              location,
              area,
              quotation,
            });
          }).then(() => {
            setVisible(false);
            message.success('تمت إضافة المدينة بنجاح');
          })
          .catch((info) => {
            console.log(info, 'info');
          });
      }}
      style={{ padding: '20px' }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="cityName"
          rules={[
            {
              required: true,
              message: 'يجب إدخال اسم المدينة',
            },
          ]}
        >
          <Input placeholder="اسم المدينة" />
        </Form.Item>

        <Form.Item
          name="location"
          rules={[
            {
              required: true,
              message: 'الرجاء إدخال موقع المدينة بشكل مفصل',
            },
          ]}
        >
          <Input placeholder="الموقع" />
        </Form.Item>

        <Form.Item
          name="area"
          rules={[
            {
              required: true,
              message: 'يجب إدخال مساحة المدينة',
            },
          ]}
        >
          <Input placeholder="مساحة المدينة" />
        </Form.Item>

        <Form.Item
          name="quotation"
          rules={[
            {
              required: true,
              message: 'يجب إدخال اقتباس للمدينة',
            },
          ]}
        >
          <Input placeholder="الاقتباس المناسب لهذه المدينة" />
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
            <input type="file" id="file" onChange={handleFileInputChange} />
            إضافة صورة للمدينة
          </label>
        </Form.Item>
      </Form>
      {previewSource && (
        <Img src={previewSource} alt="صورة المدينة" styleClass="prv-img" />
      )}
    </Modal>
  );
}

CityForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default CityForm;
