//importando as paginas da aplicação
import LandingPage from './pages/public/LandingPage'
import Login from './pages/public/Login'
import Cadastro from './pages/public/Cadastro'
import App from './pages/app'
import Home from './pages/app/Home'
import Grupos from './pages/app/Grupos'
import Perfil from './pages/app/Perfil'
import Ajustes from './pages/app/Ajustes'

//router import
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const Routes = () => {

    const routes = createBrowserRouter([
        {
            path: '/', 
            element: <LandingPage/>
        },
        {
            path: '/login', 
            element: <Login/>
        },
        {
            path: '/cadastro', 
            element: <Cadastro/>
        },
        {
            path: '/app', 
            element: <App/>, 
            children: [
                {path: '', element: <Home/>},
                {path: 'grupos', element: <Grupos/>},
                {path: 'perfil', element: <Perfil/>},
                {path: 'ajustes', element: <Ajustes/>},
            ]
        },
    ]);

    return < RouterProvider router={routes}/>
}

export default Routes;