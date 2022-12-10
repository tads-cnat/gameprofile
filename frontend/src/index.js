import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Salas from './pages/salas';
import Perfil from './pages/perfil';
import Ajustes from './pages/ajustes';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
