/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Table, message, Modal } from 'antd';
import http from '../../services/httpService';

function CityTable() {
  const [cities, setCities] = useState([]);
  const [modalState, setModalState] = useState({
    isVisible: false,
    data: null,
  });

  const getDashBoardCities = async () => {
    const url = '/api/v1/dashboard/city';
    const response = await http.get(url).catch((err) => {
      message.error(err.message);
    });
    return response;
  };
  useEffect(() => {
    getDashBoardCities().then((response) => {
      if (response) {
        const { data } = response;
        if (data?.cities) {
          setCities(data.cities);
        }
      }
    });
  }, []);

  const onEditCityDashboard = async (text, record, index) => {
    setModalState({ isVisible: true, data: record });
  };

  const editCity = async (e) => {
    e.preventDefault();
    const url = `/api/v1/dashboard/city/${modalState.data.id}`;
    const response = await http
      .patch(url, {
        name: e.target.name.value,
        location: e.target.location.value,
        area: e.target.area.value,
        image: e.target.image.value,
        quotation: e.target.quotation.value,
      })
      .catch((err) => {
        message.error(err.message);
      });
    setModalState((prev) => ({ ...prev, isVisible: false }));
    return response;
  };

  const deleteCityDashboard = async (record, index) => {
    try {
      await http.delete(`/api/v1/dashboard/city/${record.id}`);
      setCities((prev) => {
        prev.splice(index, 1);
        return [...prev];
      });
      return message.success('تم حذف المدينة بنجاح');
    } catch (error) {
      if (error) {
        throw new Error('sdasdasd');
      }
      return message.error(error.response.data.message);
    }
  };

  const columns = [
    { title: 'المدينة', dataIndex: 'name', key: 'name' },
    { title: 'المساحة', dataIndex: 'area', key: 'area' },
    { title: 'الموقع', dataIndex: 'location', key: 'location' },
    { title: 'الاقتباس', dataIndex: 'quotation', key: 'quotation' },
    {
      title: 'حذف',
      dataIndex: '',
      key: 'x',
      render: (_, record, index) => (
        <button onClick={() => deleteCityDashboard(record, index)}> حذف</button>
      ),
    },
    {
      title: 'تعديل',
      dataIndex: '',
      key: 'y',
      render: (text, record, index) => (
        <button onClick={() => onEditCityDashboard(text, record, index)}>
          {' '}
          تعديل
        </button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={cities} rowKey={(row) => row.id} />
      {modalState.isVisible && (
        <Modal
          title="تعديل المدينة"
          centered
          visible={modalState.isVisible}
          onCancel={() => setModalState({ data: null, isVisible: false })}
          okText="موافق"
          cancelText="إلغاء"
          footer={null}
          width={800}
          style={{ borderRadius: '50px' }}
        >
          <form onSubmit={editCity}>
            <div
              className=""
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '30px',
                  }}
                >
                  الإسم:
                  <input
                    name="name"
                    style={{
                      height: '100%',
                      border: '1px solid #c4c4c4',
                      borderRadius: '4px',
                      padding: '0 2px',
                      marginRight: '16px',
                    }}
                    type="text"
                    defaultValue={modalState.data?.name}
                  />
                </label>
                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '30px',
                  }}
                >
                  الموقع:
                  <input
                    name="location"
                    style={{
                      height: '100%',
                      border: '1px solid #c4c4c4',
                      borderRadius: '4px',
                      padding: '0 2px',
                      marginRight: '16px',
                    }}
                    type="text"
                    defaultValue={modalState.data?.location}
                  />
                </label>
                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '30px',
                  }}
                >
                  المساحة:
                  <input
                    name="area"
                    style={{
                      height: '100%',
                      border: '1px solid #c4c4c4',
                      borderRadius: '4px',
                      padding: '0 2px',
                      marginRight: '16px',
                    }}
                    type="text"
                    defaultValue={modalState.data?.area}
                  />
                </label>
                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '30px',
                  }}
                >
                  الإقتباس:
                  <input
                    name="quotation"
                    style={{
                      height: '100%',
                      border: '1px solid #c4c4c4',
                      borderRadius: '4px',
                      padding: '0 2px',
                      marginRight: '16px',
                    }}
                    type="text"
                    defaultValue={modalState.data?.quotation}
                  />
                </label>
              </div>
              <div style={{ flexBasis: '50%' }}>
                <label
                  style={{
                    marginBottom: '10px',
                    display: 'inline-block',
                    height: '30px',
                  }}
                >
                  الصورة:
                  <input
                    style={{
                      height: '100%',
                      border: '1px solid #c4c4c4',
                      borderRadius: '4px',
                      padding: '0 2px',
                      marginRight: '16px',
                    }}
                    type="text"
                    name="image"
                    onChange={(e) =>
                      setModalState((prev) => ({
                        ...prev,
                        data: { ...prev.data, image: e.target.value },
                      }))
                    }
                  />
                </label>
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    minHeight: '50px',
                    minHeight: '150px',
                    display: 'block',
                  }}
                  className=""
                  src={modalState.data?.image}
                  alt={`${modalState.data?.name} صورة من `}
                />
              </div>
            </div>
            <br />
            <hr />
            <br />
            <button
              type="submit"
              style={{
                marginLeft: '16px',
                padding: '1px 2px',
                minWidth: '70px',
              }}
            >
              موافق
            </button>
            <button
              type="button"
              style={{ padding: '1px 2px', minWidth: '70px' }}
            >
              إلغاء
            </button>
          </form>
        </Modal>
      )}{' '}
    </>
  );
}

export default CityTable;
