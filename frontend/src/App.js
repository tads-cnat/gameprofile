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
    <div className="App">
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
