import React from 'react';
import { Tabs } from 'antd';
import CityDashboard from './city/City';
import './style.css';

const { TabPane } = Tabs;

function Dashboard() {
  return (
    <div className="dashboard-page">


        <Tabs defaultActiveKey="1">
          <TabPane tab="المدن" key="1">
            <CityDashboard />
          </TabPane>
          <TabPane tab="القصص" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="الأمثال" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>

    </div>

  );
}

export default Dashboard;
