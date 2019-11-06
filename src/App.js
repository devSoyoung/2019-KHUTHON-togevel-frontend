import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteComponent from './routes';

import { Layout } from 'antd';

import Header from 'layout/header';
import Sidebar from 'layout/sidebar';

import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Sidebar />
          <Layout>
            <Header />
            <Content>
              <RouteComponent />
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
