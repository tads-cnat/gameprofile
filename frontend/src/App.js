import Sidebar from './components/Sidebar';
//router import
import CreateRoutes from './routes/route';
//css import
import './App.css';

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar className="sidebar" />
      <CreateRoutes />
    </div>
  );
}

export default App;