import React, { useEffect, useState } from 'react';
import { AutoComplete, Empty } from 'antd';
import { Redirect } from 'react-router-dom';
import http from '../../services/httpService';
import config from '../../services/config.json';

const { Option } = AutoComplete;

const SearchCity = () => {
  const [value, setValue] = useState('');
  const [id, setId] = useState();
  const [expectedError, setExpectedError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(async () => {
    try {
      const cities = await http.get(
        `${config.apiEndPoint}/search?city=${value}`,
      );
      if (cities.length) {
        setResult(cities);
      } else {
        throw new Error('لا توجد مدن تبدأ بهذه الحروف');
      }
    } catch (error) {
      setExpectedError(error.message);
    }
  }, [value]);

  useEffect(async () => {
    try {
      await http.get(
        `${config.apiEndPoint}/city/${id}`,
      );
        <Redirect to={`/city/:${id}`} />;
    } catch (error) {
      <Redirect to="/notfound" />;
    }
  }, [id]);

  const changeHandler = (searchText) => {
    setValue(searchText);
  };

  const selectHandler = (cityName) => {
    const cityChoice = result.filter((city) => city.title === cityName);
    setId(cityChoice[0].id);
  };

  return (
    <AutoComplete
      style={{ width: '80%' }}
      allowClear
      onSelect={selectHandler}
      onChange={changeHandler}
      placeholder="ابحث عن اسم مدينة"
    >
      {result ? (
        result.map((city) => <Option key={city.id} value={city.title} />)
      ) : (
        <Option disabled>
          <Empty description={<span>{expectedError}</span>} />
        </Option>
      )}
    </AutoComplete>
  );
};

export default SearchCity;
