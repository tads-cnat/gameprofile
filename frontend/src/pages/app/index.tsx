import { Outlet } from 'react-router';

import './styles.css';
import { Navbar } from '../../components/navbar';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Outlet />
    </div>
  );
};
export default App;
