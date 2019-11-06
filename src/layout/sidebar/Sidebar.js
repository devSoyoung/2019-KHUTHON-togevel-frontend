import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppActionCreators } from 'store/app/app.action';

import { Icon } from 'antd';
import './Sidebar.css';

const AppSidebar = ({ closeSidebar, showSidebar, setLogout, isLogin }) => {
  return (
    <>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`} onClick={closeSidebar}>
        <div className="real-sidebar">
          {isLogin && (
            <>
              <div className="sidebar-item">
                <Icon type="flag" theme="twoTone" /><p>여행모임</p>
              </div>
              <div className="sidebar-item">
                <Icon type="car" theme="twoTone" /><p>내일로여행</p>
              </div>
              <div className="sidebar-item">
                <Icon type="environment" theme="twoTone" /><p>요즘여기</p>
              </div>
            </>
          )}

          <div className="sidebar-help-icon">
            <Icon type="question-circle" />
          </div>
          <div className="sidebar-login-icon">
            {isLogin ? (
              <Icon type="logout" onClick={setLogout}/>
            ) : (
              <Link to="/login"><Icon type="login" /></Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  showSidebar: state.app.showSidebar,
  isLogin: state.app.isLogin,
});

const mapDispatchToProps = dispatch => ({
  closeSidebar: () => dispatch(AppActionCreators.closeSidebar()),
  setLogout: () => dispatch(AppActionCreators.setLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppSidebar);
