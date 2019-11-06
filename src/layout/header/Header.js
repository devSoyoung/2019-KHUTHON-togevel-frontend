import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

import {
  AppActionCreators, AppActionTypes,
} from 'store/app/app.action';
import './Header.css';

const { Header } = Layout;

const AppHeader = ({ toggleSidebar, isLogin }) => {
  return (
    <>
      <Header>
        <Link to="/">
          <div className='app-title'>togevel</div>
        </Link>
        <Button onClick={toggleSidebar} className='list-button' type="link" shape="circle" icon="appstore" />
        {!isLogin && (
          <Link to="/login">
            <Button className='login-button' type="link" shape="circle" icon="login" />
          </Link>
        )}
      </Header>
    </>
  );
};

const mapStateToProps = state => ({
  isLogin: state.app.isLogin,
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(AppActionCreators.toggleSidebar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);
