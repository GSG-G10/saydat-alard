import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';
import { useHistory } from 'react-router-dom';
import http from '../../services/httpService';
import config from '../../services/config.json';
import Img from './Img';

import './css/search.css';

const { Option } = AutoComplete;

const SearchCity = () => {
  const [value, setValue] = useState('');
  const [expectedError, setExpectedError] = useState('لاتوجد مدن تبدأ بهذا الحرف');
  const [result, setResult] = useState([]);

  const { push } = useHistory();

  const getCitiesName = async () => {
    try {
      const cities = await http.get(
        `${config.apiEndPoint}/search?city=${value}`, { canelToken: http.source.token },
      );
      if (cities.data.data.length) {
        setResult(cities.data.data);
      }
    } catch (error) {
      setExpectedError(error.message);
    }
  };

  useEffect(() => {
    if (value) {
      getCitiesName();
    }
    return () => {
      http.source.cancel('request stopped by user');
    };
  }, [value]);

  const changeHandler = (searchText) => {
    setValue(searchText);
  };

  const selectHandler = (cityName) => {
    const cityChoice = result.filter((city) => city.name === cityName);
    push(`/city/${cityChoice[0].id}`);
  };

  return (
    <div className="search-container">
      <AutoComplete
        className="search-auto-complete"
        allowClear
        onSelect={selectHandler}
        onChange={changeHandler}
        placeholder="ابحــث عن اســـم مــدينة"
        bordered={false}
      >

        {result.length ? (
          result.map((city) => <Option key={city.id} value={city.name} />)
        ) : <Option disabled key={expectedError} value={expectedError} />}
      </AutoComplete>
      <span>
        <Img src="/key.png" alt="key-icon" styleClass="icon-key" />
      </span>
    </div>

  );
};

export default SearchCity;
