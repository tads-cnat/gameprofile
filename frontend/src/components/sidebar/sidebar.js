import React from 'react';
import Logo from '../../assets/logo.png';
import './sidebar.css';
// ajustando tema
import { createTheme } from '@mui/material/styles';

// icons import
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import Switch from '@mui/material/Switch';


function Sidebar() {
    return (
        <div className="sidebar pl-9 flex flex-col justify-between">
            <header>
                <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
            </header>

            <nav className="flex w-100 mb-36">
                <ul className="w-11/12 m-auto">
                    <li className="w-full justify-start p-2 my-2">
                        <a href="#" className="flex flex-row align-middle">
                            <HomeRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            <span className="text-xl align-middle my-auto">Home</span>
                        </a>
                    </li>

                    <li className="w-full justify-start p-2 my-2">
                        <a href="#" className="flex flex-row align-middle">
                            <MeetingRoomRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            <span className="text-xl align-middle my-auto">Salas</span>
                        </a>
                    </li>

                    <li className="w-full justify-start p-2 my-2">
                        <a href="#" className="flex flex-row align-middle">
                            <PersonRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            <span className="text-xl align-middle my-auto">Perfil</span>
                        </a>
                    </li>
                    
                    <li className="w-full justify-start p-2 my-2">
                        <a href="#" className="flex flex-row align-middle">
                            <SettingsRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                            <span className="text-xl align-middle my-auto">Ajustes</span>
                        </a>
                    </li>

                </ul>
            </nav>


            <div className="w-11/12 m-auto create-group flex flex-col justify-center align-middle">

                <AddRoundedIcon className="mx-auto" sx={{ fontSize: 40 }}/>
                <span className="text-xl align-middle my-auto">Criar Grupo</span>

            </div>

            <footer className="border-t flex w-100 flex-col pt-3">
                <div className="w-full justify-start p-2 my-2">

                    <a href="#" className="flex flex-row align-middle p-2 logout">
                        <LogoutRoundedIcon className="mr-5" sx={{ fontSize: 40 }}/>
                        <span className="text-xl align-middle my-auto">Logout</span>
                    </a>
                    
                    <div className=" m-auto create-group flex flex-row justify-center align-middle">
                        <DarkModeRoundedIcon className="mr-5" sx={{ fontSize: 40 }} />
                        <span className="text-xl align-middle my-auto">Dark mode</span>
                        <Switch color="secondary" defaultChecked/>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Sidebar;