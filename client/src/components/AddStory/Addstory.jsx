import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Addstory.css';
import {
  DeleteOutlined,
} from '@ant-design/icons';
import { Modal, message } from 'antd';
import PropTypes from 'prop-types';
import http from '../../services/httpService';

function Addstory({
  storyId, image, content, title, setRequestSent,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const deleteStory = async () => {
    try {
      await http.delete(`/api/v1/story/${storyId}`);
      return message.success('تم حذف القصة بنجاح');
    } catch (error) {
      if (error.response.status === 500) {
        return history.push('/error500');
      }
      return message.error(error.response.data.message);
    }
  };
  const acceptStory = async () => {
    try {
      await http.patch(`/api/v1/story/${storyId}`);
      return message.success('تم إضافة القصة بنجاح');
    } catch (error) {
      if (error.response.status === 500) {
        return history.push('/error500');
      }
      return message.error(error.response.data.message);
    }
  };
  const handleOk = () => {
    deleteStory();
    setIsModalVisible(false);
    setRequestSent(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAcceptStory = () => {
    acceptStory();
    setRequestSent(true);
  };

  return (
    <div className="story-container">
      <div><img src={image} alt="pic" /></div>
      <div className="textdiv">
        <h1>{title}</h1>
        <p>
          {content}
          {' '}
        </p>
      </div>
      <div className="buttonsdiv">
        <button type="button" onClick={handleAcceptStory}>قبول </button>
        <DeleteOutlined onClick={showModal} style={{ fontSize: '30px', color: '#C00606' }} />

      </div>
      <Modal title="تأكيد الحذف" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="حذف" cancelText="إلغاء">
        <p>هل أنت متأكد أنك تريد حذف هذه القصة !</p>
      </Modal>
    </div>

  );
}
Addstory.propTypes = {
  storyId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setRequestSent: PropTypes.func.isRequired,
};

export default Addstory;
