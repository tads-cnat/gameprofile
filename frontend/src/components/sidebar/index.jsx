import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './sidebar.css';
// icons import
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Switch from '@mui/material/Switch';


const Sidebar = () => {

    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className={`sidebar pl-9 flex flex-col justify-between ${isOpened ? 'opened' : 'closed'}`}>
            <header>
                <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
            </header>

            <nav className="flex w-100 mb-36">
                <button className={`menu-toggle ${isOpened ? 'menu-toggle-opened' : 'menu-toggle-closed'}`} onClick={() => setIsOpened(!isOpened)}>
                    { isOpened ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon /> }
                </button>
                <ul className="w-11/12 m-auto">
                    <li className="w-full justify-start mb-6">
                        <a href="/" className="flex flex-row align-middle p-2">
                            <HomeRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            {isOpened && <span className="text-xl align-middle my-auto">Home</span>}
                        </a>
                    </li>

                    <li className="w-full justify-start mb-6">
                        <a href="/salas" className="flex flex-row align-middle p-2">
                            <MeetingRoomRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            {isOpened && <span className="text-xl align-middle my-auto">Salas</span>}
                        </a>
                    </li>

                    <li className="w-full justify-start mb-6">
                        <a href="/perfil" className="flex flex-row align-middle p-2">
                            <PersonRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            {isOpened && <span className="text-xl align-middle my-auto">Perfil</span>}
                        </a>
                    </li>
                    
                    <li className="w-full justify-start">
                        <a href="/ajustes" className="flex flex-row align-middle p-2">
                            <SettingsRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            {isOpened && <span className="text-xl align-middle my-auto">Ajustes</span>}
                        </a>
                    </li>

                </ul>
            </nav>

            <a href="/create-group">
                <div className="w-11/12 m-auto create-group flex flex-col justify-center align-middle">

                    <AddRoundedIcon className="mx-auto" sx={{ fontSize: 40 }}/>
                    <span className="text-xl align-middle my-auto">{isOpened && "Criar Grupo"}</span>

                </div>
            </a>

            <footer className="border-t flex w-100 flex-col pt-3">
                <div className="w-full justify-start p-2 my-2">

                    {/* alterar componente para funçãod e logout assim que implementada */}
                    <button  className="flex flex-row align-middle p-2 logout w-full">
                        <LogoutRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                        <span className="text-xl align-middle my-auto">{isOpened && "Logout"}</span>
                    </button>
                    
                    <div className=" m-auto create-group flex flex-row justify-center align-middle">
                        <DarkModeRoundedIcon className="mr-5" sx={{ fontSize: 40 }} />
                        {isOpened &&
                            <>
                                <span className="text-base align-middle my-auto">Dark mode</span>
                                <Switch color="secondary"/>
                            </>
                        }
                    </div>
                </div>
            </footer>

            


        </div>
    )
}

export default Sidebar;