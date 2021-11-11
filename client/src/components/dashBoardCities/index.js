/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Table, message, Modal } from 'antd';
import http from '../../services/httpService';
import style from './style.module.css';

function CityTable() {
  const [cities, setCities] = useState([]);
  const [previewSource, setPreviewSource] = useState('');
  const [modalState, setModalState] = useState({
    isVisible: false,
    data: null,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

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
        cityName: e.target.name.value,
        location: e.target.location.value,
        area: e.target.area.value,
        image: previewSource,
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setModalState((prev) => ({
      ...prev,
      data: { ...prev.data, image: previewSource },
    }));
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
        <button
          onClick={() => deleteCityDashboard(record, index)}
          className={style.editDeleteBtn}
        >
          {' '}
          حذف
        </button>
      ),
    },
    {
      title: 'تعديل',
      dataIndex: '',
      key: 'y',
      render: (text, record, index) => (
        <button
          onClick={() => onEditCityDashboard(text, record, index)}
          className={style.editDeleteBtn}
        >
          {' '}
          تعديل
        </button>
      ),
    },
  ];

  function both() {}

  return (
    <>
      <Table
        columns={columns}
        dataSource={cities}
        rowKey={(row) => row.id}
        className={style.mainTable}
        size="small"
      />
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
            <div className={style.mianForm}>
              <div className={style.dev2}>
                <label className={style.formLabel}>
                  الإسم:
                  <input
                    name="name"
                    type="text"
                    className={style.formInput}
                    defaultValue={modalState.data?.name}
                  />
                </label>
                <label className={style.formlabel}>
                  الموقع:
                  <input
                    name="location"
                    type="text"
                    className={style.formInput}
                    defaultValue={modalState.data?.location}
                  />
                </label>
                <label className={style.formLabel}>
                  المساحة:
                  <input
                    name="area"
                    type="text"
                    className={style.formInput}
                    defaultValue={modalState.data?.area}
                  />
                </label>
                <label className={style.formLabel}>
                  الإقتباس:
                  <input
                    name="quotation"
                    type="text"
                    className={style.formInput}
                    defaultValue={modalState.data?.quotation}
                  />
                </label>
              </div>
              <div style={{ flexBasis: '50%' }}>
                <label className={style.defLabel}>
                  الصورة:
                  <input
                    className={style.formInput}
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                  />
                </label>

                {previewSource && (
                  <img
                    src={previewSource}
                    alt="chosen"
                    className={style.formImg}
                  />
                )}
              </div>
            </div>
            <br />
            <hr />
            <br />
            <button className={style.okBtn} type="submit">
              موافق
            </button>
            <button className={style.cancelBtn} type="button">
              إلغاء
            </button>
          </form>
        </Modal>
      )}{' '}
    </>
  );
}

export default CityTable;
