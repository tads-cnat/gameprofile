import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router';

import './styles.css';

const App = () => {
  return (
    <div className='App'>
        <Sidebar />
        <Outlet />
    </div>
  );
};
export default App;
