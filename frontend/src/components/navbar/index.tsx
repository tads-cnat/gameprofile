import { ReactElement } from "react"

import Logo from "../../assets/logo/logo.svg";
import Sair from "../../assets/sidebarIcons/Sair.svg"
import Chat from "../../assets/sidebarIcons/Chat.svg"

import "./index.css"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const Navbar = (): ReactElement => {
    return (
        <div id="navbar">
            <div className="navbar-logo">
                <Link to="/app">
                    <img src={Logo} alt="Logo" className="sidebar-logo ml-3" />
                </Link>
            </div>
            <div className="image-container">
                <TextField size="small" id="search" label="pesquisar" variant="outlined" />
                <Link to="/app/chat" className="">
                    <img src={Chat} alt="Chat" className="navbar-icon ml-3" />
                </Link>
                <Link to="/" className="">
                    <img src={Sair} alt="sair" className="navbar-icon mx-3" />
                </Link>
            </div>
        </div>
    )
}