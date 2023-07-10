import { ReactElement } from "react"

import Sair from "../../assets/sidebarIcons/Sair.svg"
import Chat from "../../assets/sidebarIcons/Chat.svg"

import "./index.css"
import { TextField } from "@mui/material"

export const Navbar = (): ReactElement => {
    return (
        <div id="navbar">
            <div className="navbar-logo">
                <h1>testeasdasdasdasdasd</h1>
            </div>
            <div className="image-container">
                <div>
                    <TextField id="search" label="pesquisar" variant="outlined" />
                </div>
                <div>
                    <img src={Chat} alt="" />
                </div>
                <div>
                    <img src={Sair} alt="" />
                </div>
            </div>
        </div>
    )
}