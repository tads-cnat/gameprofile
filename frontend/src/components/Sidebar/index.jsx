import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
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
        <div className={`sidebar pl-9 flex flex-col ${isOpened ? 'opened' : 'closed'}`}>
            <header>
                <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
            </header>

            <button className={`menu-toggle ${isOpened ? 'menu-toggle-opened' : 'menu-toggle-closed'}`} onClick={() => setIsOpened(!isOpened)}>
                { isOpened ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon /> }
            </button>

            <div className='flex flex-col justify-between h-full mt-10'>

                <nav className="flex w-full mb-36">
                    <ul className="w-11/12 m-auto">
                        <li className="w-full justify-start mb-6">
                            <a href="/app" className="flex p-2">
                                <HomeRoundedIcon className={`${isOpened ? '': 'mx-auto'}`} sx={{ fontSize: 30 }}/>
                                {isOpened && <span className="text-lg align-middle my-auto ml-5">Home</span>}
                            </a>
                        </li>

                        <li className="w-full justify-start mb-6">
                            <a href="/app/grupos" className="flex flex-row align-middle p-2">
                                <MeetingRoomRoundedIcon className={`${isOpened ? '': 'mx-auto'}`} sx={{ fontSize: 30 }}/>
                                {isOpened && <span className="text-lg align-middle my-auto ml-5"> Grupos</span>}
                            </a>
                        </li>

                        <li className="w-full justify-start mb-6">
                            <a href="/app/perfil" className="flex flex-row align-middle p-2">
                                <PersonRoundedIcon className={`${isOpened ? '': 'mx-auto'}`} sx={{ fontSize: 30 }}/>
                                {isOpened && <span className="text-lg align-middle my-auto ml-5">Perfil</span>}
                            </a>
                        </li>
                        
                        <li className="w-full justify-start">
                            <a href="/app/ajustes" className="flex flex-row align-middle p-2">
                                <SettingsRoundedIcon className={`${isOpened ? '': 'mx-auto'}`} sx={{ fontSize: 30 }}/>
                                {isOpened && <span className="text-xl align-middle my-auto ml-5"> Ajustes</span>}
                            </a>
                        </li>

                    </ul>
                </nav>

                <a href="/app/create-group">
                    <div className="flex flex-col align-middle p-2 logout w-full create-group">

                        <AddRoundedIcon className="mx-auto" sx={{ fontSize: 30 }}/>
                        <span className="text-xl align-middle my-auto">{isOpened && "Criar Grupo"}</span>

                    </div>
                </a>

                <footer className="border-t flex w-full flex-col pt-3">
                    <div className="w-full justify-start p-2 my-2">

                        {/* alterar componente para funçãod e logout assim que implementada */}
                        <button  className="flex flex-row align-middle p-2 logout w-full">
                            <LogoutRoundedIcon  sx={{ fontSize: 30 }}/>
                            <span className="text-lg align-middle my-auto ml-5">{isOpened && "Logout"}</span>
                        </button>
                        
                        <div className=" m-auto create-group flex flex-row justify-center align-middle p-2 mt-4">
                            <DarkModeRoundedIcon  sx={{ fontSize: 30 }} />
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
            


        </div>
    )
}

export default Sidebar;