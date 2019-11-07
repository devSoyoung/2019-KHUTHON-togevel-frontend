import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';

import configureStore from 'store/configureStore';

import { PersistGate } from 'redux-persist/integration/react';
import RouteComponent from './routes';

import { Layout } from 'antd';

import Header from 'layout/header';
import Sidebar from 'layout/sidebar';

import './App.css';

const initialState = {};
const { store, persistor } = configureStore(initialState, history);

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Layout style={{ height: '100%', paddingBottom: '15px' }}>
              <Sidebar />
              <Layout>
                <Header />
                <Content>
                  <RouteComponent />
                </Content>
              </Layout>
            </Layout>
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
