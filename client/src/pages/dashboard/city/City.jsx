import React, { useState } from 'react';
import CityForm from '../../../components/addCityForm';
import Button from '../../../components/common/Button';

const CityDashboard = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  return (
    <div>
      <Button
        text="أضف مدينة"
        type="default"
        btnHandler={() => setVisibleForm(true)}
        load={false}
      />
      {visibleForm && (
        <CityForm visible={visibleForm} setVisible={setVisibleForm} />
      )}
    </div>
  );
};

export default CityDashboard;
