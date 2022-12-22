// Importando paginas da aplicação
// pagina de erro
import ErrorPage from "./pages/public/ErrorPage";
// paginas publicas
import LandingPage from "./pages/public/LandingPage";
import Cadastro from "./pages/public/Cadastro";
import Login from "./pages/public/Login";

//paginas de APP
import Dashboard from "./pages/app/Dashboard";
import Ajustes from "./pages/app/Ajustes";
import Perfil from "./pages/app/Perfil";
import Salas from "./pages/app/Grupos";
import CreateGroup from "./pages/app/CreateGroup";


//router import
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const CreateRoutes = () =>{
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/cadastro",
            element: <Cadastro />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/login",
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        
        
        ]);

    return <RouterProvider router={routes} />;
}

export default CreateRoutes;