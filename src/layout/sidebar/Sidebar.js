import React from 'react';
import { Layout } from 'antd';
import './Sidebar.css';

const { Sider } = Layout;

const AppSidebar = () => {
  return (
    <>
      <Sider className="sidebar">여기는 사이드</Sider>
    </>
  );
};

export default AppSidebar;
