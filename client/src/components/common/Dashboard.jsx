import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import Addstory from '../AddStory/Addstory';
import http from '../../services/httpService';
import '../AddStory/Addstory.css';

function Dashboard({ page = 1 }) {
  const [story, setStory] = useState([]);
  const [requestSent, setRequestSent] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await http.get(`/api/v1/story?page=${page}`);
      return setStory(data);
    } catch (error) {
      return message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setRequestSent(false);
    fetchData();
  }, [requestSent]);
  return (
    <div className="addStory">
      {
    story.length ? story.map((ele) => (
      <Addstory
        storyId={ele.id}
        setRequestSent={setRequestSent}
        image={ele.image}
        title={ele.title}
        content={ele.content}
      />
    ))
      : <h2>لا توجد قصص معلقة</h2>
}
    </div>
  );
}
Dashboard.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Dashboard;
