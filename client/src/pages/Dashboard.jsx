import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { message } from 'antd';
import Addstory from '../components/AddStory/Addstory';
import http from '../services/httpService';
import '../components/AddStory/Addstory.css';

function Dashboard({ page = 1 }) {
  const [story, setStory] = useState([]);
  const [requestSent, setRequestSent] = useState(false);
  const history = useHistory();

  const fetchData = async () => {
    try {
      const { data } = await http.get(`/api/v1/story?page=${page}`);
      return setStory(data);
    } catch (error) {
      if (error.response.status === 500) {
        return history.push('/error500');
      }
      return message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setRequestSent(false);
    fetchData();
    // fetch dashboard data
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
