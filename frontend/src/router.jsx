//aplications pages
import Dashboard from './pages/Dashboard';
import Salas from './pages/Salas';
import Perfil from './pages/Perfil';
import Ajustes from './pages/Ajustes';
import CreateGroup from './pages/CreateGroup';

//router import
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const CreateRoutes = () =>{
    const routes = createBrowserRouter([
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

    return <RouterProvider router={routes} />;
}

export default CreateRoutes;