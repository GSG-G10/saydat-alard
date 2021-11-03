/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import './styles.css';

const { TextArea } = Input;

function StoryForm() {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [previewSource, setPreviewSource] = useState('');
  const [visible, setVisible] = useState(false);
  const [story, setStory] = useState({
    title: null,
    content: null,
    data: null,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch('/api/v1/story', {
        method: 'POST',
        body: JSON.stringify({
          data: base64EncodedImage,
          title: story.title,
          content: story.content,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      setFileInputState('');
      setPreviewSource('');
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    setVisible(false);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        أضف قصتك
      </Button>
      <Modal
        title="اضف قصتك"
        centered
        visible={visible}
        onOk={handleSubmitFile}
        okText="موافق"
        cancelText="الغاء"
        onCancel={() => setVisible(false)}
        width={800}
      >
        <Input
          onChange={(e) => setStory((prev) => ({ ...prev, title: e.target.value }))}
        />
        <>
          <TextArea
            rows={4}
            onChange={(e) => setStory((prev) => ({ ...prev, content: e.target.value }))}
          />
          <form onSubmit={handleFileInputChange} className="form">
            <button type="button">
              <dev className="inputForm">
                <label htmlFor="fileInput">تحميل الصورة</label>
                <input
                  id="fileInput"
                  type="file"
                  name="image"
                  value={fileInputState}
                  className="form-input"
                  onChange={handleFileInputChange}
                />
              </dev>
            </button>
            {previewSource && (
            <img
              src={previewSource}
              alt="chosen"
              style={{ height: '300px' }}
            />
            )}
          </form>
        </>
      </Modal>
    </>
  );
}

export default StoryForm;
