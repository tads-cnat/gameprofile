//aplications pages
import Home from './pages/home';
import Salas from './pages/salas';
import Perfil from './pages/perfil';
import Ajustes from './pages/ajustes';
import Sidebar from './components/sidebar/sidebar';

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
  }
  
  ]);


function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar className="sidebar" />
      <RouterProvider router={router} className="content"/>
    </div>
  );
}

export default App;
