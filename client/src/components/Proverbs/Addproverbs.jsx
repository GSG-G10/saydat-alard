import React, { useState } from 'react';
import {
  Modal, Button, Input, message,
} from 'antd';
import './proverb.css';
import http from '../../services/httpService';

function Addproverbs() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({ proverb: '' });
  const handleChange = (e) => setValue({ proverb: e.target.value });
  console.log(value);

  const sendProverb = async () => {
    try {
      if (value.proverb !== '') {
        const proverb = await http.post('api/v1/proverb', value);
        message.success(proverb.response.data.message);
      } else {
        setVisible(true);
        throw new Error('يجب عليك إضافة مثل');
      }
    } catch (error) {
      message.error(error.response.data.message);
      console.log(error);
    }
  };
  const handleOpen = () => {
    setVisible(false);
    sendProverb();
  };
  return (
    <>
      <Button type="secondary" onClick={() => setVisible(true)}>
        إضافة مثل
      </Button>
      <Modal
        title="أضف المثل"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
        <div className="proverbcontainer">
          <div><Input type="text" onChange={handleChange} className="input" placeholder="أضف هنا المثال" required /></div>
          <div className="btns">
            <Button size="large" type="primary" onClick={handleOpen} style={{ backgroundColor: 'rgb(24, 85, 3)', borderRadius: '8px', padding: '0px 40px' }}>
              إضــــافة
            </Button>
            <Button size="large" type="secondary" onClick={() => setVisible(false)} style={{ borderRadius: '8px', padding: '0px 40px' }}>
              إلــــغاء
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Addproverbs;
