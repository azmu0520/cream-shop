import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './root';
import { UsersProvider } from './context/User';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <Router>
        <Root />
      </Router>
    </UsersProvider>
  </React.StrictMode>
);
