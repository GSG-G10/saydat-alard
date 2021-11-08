/* eslint-disable */
import React, { useState, useEffect } from 'react';
import http from '../../services/httpService';
import { Table, message } from 'antd';

function CityTable() {
    const [cities, setCities] = useState([]);

    const getDashBoardCities = async () => {
        const url = '/api/v1/dashboard/city';
        const response = await http
          .get(url)
          .catch((err) => {
            message.error(err.message);
          });
        return response;
      }; useEffect(() => {
        getDashBoardCities().then((response) => {
          if (response) {
            const { data } = response;
            console.log("response",response);
            if (data?.cities) {
              setCities(data.cities);
            }
          }
        });
      }, []);
    
      const editCityDashboard = async () => {
        const url = '/api/v1/city';
        const response = await http.patch(url).catch((err) =>{
            message.error(err.message);
        });
        return response;
      }






  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'الاسم', dataIndex: 'name', key: 'name' },
    { title: 'المساحة', dataIndex: 'age', key: 'age' },
    { title: 'الموقع', dataIndex: 'address', key: 'address' },
    {
        title: 'حذف',
        dataIndex: '',
        key: 'x',
        render: () => <a href="/">Delete</a>,
      },
    {
    title: 'تعديل',
    dataIndex: '',
    key: 'y',
    render: () => <a href="/">Delete</a>,
    },
  ];

//   const data = [
//       // {
//       //   key: 2,
//       //   name: 'Jim Green',
//       //   age: 42,
//       //   address: 'London No. 1 Lake Park',
//       //   description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
//       // },
//     // {
//     //   key: city.id,
//     //   name: city.name,
//     //   area: city.area,
//     //   image: city.image,
//     //   quotation: city.quotation,
//     // },
  
//   ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={cities}
    />

  );
}

export default CityTable;
