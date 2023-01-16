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
import Tooltip from '@mui/material/Tooltip';



const Sidebar = (props) => {
    var url_atual = window.location.pathname;
    const service = url_atual.split("/")[2];


    return (
        <div className="sidebar pl-9 flex flex-col">
            <header>
                <img src={Logo} alt="GameProfile logo" className="mx-auto logo" />
            </header>

            <div className='flex flex-col justify-between h-full mt-10'>

                <nav className="flex w-full ">
                    <ul className="w-11/12 m-auto">
                        <Tooltip title="Home" placement="left" arrow>
                                <li className={`w-full justify-start mb-6 ${service === undefined ? 'selecionado': ""}`} >
                                <a href="/app" className="flex p-2">
                                    <HomeRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />
                                </a>
                            </li>
                        </Tooltip>

                        <Tooltip title="Grupos" placement="left" arrow>
                            <li className={`w-full justify-start mb-6 ${service === "grupos" ? 'selecionado': ""}`}>
                                <a href="/app/grupos" className="flex flex-row align-middle p-2">
                                    <MeetingRoomRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />
                                </a>
                            </li>
                        </Tooltip>

                        <Tooltip title="Perfil" placement="left" arrow>
                            <li className={`w-full justify-start mb-6 ${service === "perfil" ? 'selecionado': ""}`}>
                                <a href="/app/perfil" className="flex flex-row align-middle p-2">
                                    <PersonRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />
                                </a>
                            </li>
                        </Tooltip>

                        <Tooltip title="Ajustes" placement="left" arrow>
                            <li className={`w-full justify-start mb-6 ${service === "ajustes" ? 'selecionado': ""}`}>
                                <a href="/app/ajustes" className="flex flex-row align-middle p-2">
                                    <SettingsRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />
                                </a>
                            </li>
                        </Tooltip>

                    </ul>
                </nav>

                <Tooltip title="Criar Grupo" placement="left" arrow>
                    <a href="/app/create-group">
                        <div className="flex flex-col align-middle p-2 logout w-full create-group">
                            <AddRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />

                        </div>
                    </a>
                </Tooltip>

                <footer className="border-t flex w-full flex-col pt-3">
                    <div className="w-full justify-start my-2">
                        <Tooltip title="Logout" placement="left" arrow>
                            <button className="flex flex-row align-middle p-2 logout w-full">
                                <LogoutRoundedIcon className='mx-auto' sx={{ fontSize: 30 }} />
                            </button>
                        </Tooltip>

                        <Tooltip title={`${props.darkTheme ? "Modo Claro" : "Modo Escuro"}`} placement="left" arrow>
                            <div className="darkTheme-Button flex flex-row justify-center align-middle mt-4 py-2 px-4 w-full">
                                <DarkModeRoundedIcon className="mx-auto" sx={{ fontSize: 30 }} />
                            </div>
                        </Tooltip>
                    </div>
                </footer>
            </div>



        </div>
    )
}

export default Sidebar;