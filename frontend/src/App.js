//aplications pages
import Home from './pages/Home';
import Salas from './pages/Salas';
import Perfil from './pages/Perfil/perfil';
import Ajustes from './pages/Ajustes';
import Sidebar from './components/Sidebar';
import CreateGroup from './pages/CreateGroup';
//router import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//css import
import './App.css';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
      path: "/salas",
      element: <Salas />,
  },
  {
      path: "/perfil",
      element: <Perfil />,
  },
  {
      path: "/ajustes",
      element: <Ajustes />,
  },
  {
      path: "/create-group",
      element: <CreateGroup />,
  },
  
  ]);


function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar className="sidebar" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
