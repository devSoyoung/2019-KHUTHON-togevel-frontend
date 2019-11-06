import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import './Header.css';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <div className='app-title'>togevel</div>
        </Link>
        <Button className='list-button' type="link" shape="circle" icon="appstore" />
        <Link to="/login">
          <Button className='login-button' type="link" shape="circle" icon="login" />
        </Link>
      </Header>
    </>
  );
};

export default AppHeader;
