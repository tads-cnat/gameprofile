//importando as paginas da aplicação
import LandingPage from './pages/public/LandingPage'
import Login from './pages/public/Login'
import Cadastro from './pages/public/Cadastro'
import App from './pages/app'
import Home from './pages/app/Home'
import Grupos from './pages/app/Grupos'
import Grupo from './pages/app/Grupo'
import Ajustes from './pages/app/Ajustes'
import CreateGroup from './pages/app/CreateGroup'

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
                {path: 'grupo', element: <Grupo/>},
                {path: 'ajustes', element: <Ajustes/>},
                {path: 'criar-grupo', element: <CreateGroup/>},
            ]
        },
    ]);

    return < RouterProvider router={routes}/>
}

export default Routes;