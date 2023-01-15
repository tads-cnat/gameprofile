import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';

const App = () => {

    const [paginaAtual, setPaginaAtual] = useState("Home");
    const [darkTheme, setDarkTheme] = useState(false);
    function handlerSetPage(page){
        setPaginaAtual(page);
    }


    return(
        <>
            <Sidebar paginaAtual = {paginaAtual} handlerSetPage = {handlerSetPage}/>
            <div className="w-full">
                <Outlet />
            </div>
        </>
    )
};

export default App;