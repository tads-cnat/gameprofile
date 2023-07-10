import Logo from "../../assets/logo/logo.svg";

// importando icones
import Home from "../../assets/sidebarIcons/Home.svg";
import Grupos from "../../assets/sidebarIcons/list.svg";
import Groupo from "../../assets/sidebarIcons/group.svg";
import CriarGrupo from "../../assets/sidebarIcons/CriarGrupo.svg";
import Sair from "../../assets/sidebarIcons/Sair.svg";
import Chat from "../../assets/sidebarIcons/Chat.svg";

import Tooltip from "@mui/material/Tooltip";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

const Sidebar = () => {

  const { page } = useSelector((rootReducer:any) => rootReducer.sidebar);
  const dispatch = useDispatch();

  const handlerPage = (page:string) => {
    dispatch({
      type: "navbar/setPage",
      payload: page
    })
  }

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    handlerPage(div.id)
  }


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="Logo" className="sidebar-logo" />
      </div>

      <div className="sidebar-menu">
        <Tooltip title="Home" placement="right">
          <div id="Home" className={`sidebar-menu-item ${page === "Home" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app">
              <img src={Home} alt="Home" className="sidebar-menu-item-icon" />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Chat" placement="right">
          <div id="Chat" className={`sidebar-menu-item ${page === "Chat" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app/chat">
              <img
                src={Chat}
                alt="Chat"
                className="sidebar-menu-item-icon"
              />
            </Link>
          </div>
        </Tooltip>
      </div>

      <div className="sidebar-menu">
        <Tooltip title="Criar Grupo" placement="right">
          <div id="criar-grupo" className={`sidebar-menu-item ${page === "criar-grupo" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app/criar-grupo">
              <img src={CriarGrupo} alt="Criar Grupo" className="sidebar-menu-item-icon" />
            </Link>
          </div>
        </Tooltip>
      </div>

      <div className="sidebar-footer">
        <Tooltip title="Sair" placement="right">
          <div id="criar-grupo" className={`sidebar-menu-item ${page === "Sair" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/">
              <img src={Sair} alt="Sair" className="sidebar-menu-item-icon" />
            </Link>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
