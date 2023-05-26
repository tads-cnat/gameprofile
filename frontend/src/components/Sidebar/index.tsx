import Logo from "../../assets/logo/logo.svg";

// importando icones
import Home from "../../assets/sidebarIcons/Home.svg";
import Grupos from "../../assets/sidebarIcons/list.svg";
import Groupo from "../../assets/sidebarIcons/group.svg";
import Ajustes from "../../assets/sidebarIcons/Ajustes.svg";
import CriarGrupo from "../../assets/sidebarIcons/CriarGrupo.svg";
import Sair from "../../assets/sidebarIcons/Sair.svg";
import Noturno from "../../assets/sidebarIcons/Noturno.svg";

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
        <Tooltip title="Grupos" placement="right">
          <div id="Grupos" className={`sidebar-menu-item ${page === "Grupos" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app/grupos">
              <img
                src={Grupos}
                alt="Grupos"
                className="sidebar-menu-item-icon"
              />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Grupo" placement="right">
          <div id="Grupo" className={`sidebar-menu-item ${page === "Grupo" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app/grupo/1">
              <img
                src={Groupo}
                alt="Grupo"
                className="sidebar-menu-item-icon"
              />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Ajustes" placement="right">
          <div id="Ajustes" className={`sidebar-menu-item ${page === "Ajustes" ? 'selected' : ''} `} onClick={divClickedHandler}>
            <Link to="/app/ajustes">
              <img
                src={Ajustes}
                alt="Ajustes"
                className="sidebar-menu-item-icon"
              />
            </Link>
          </div>
        </Tooltip>
      </div>

      <div className="sidebar-menu">
        <Tooltip title="Criar Grupo" placement="right">
          <div className="sidebar-menu-item selected">
            <Link to="/app/criar-grupo">
              <img src={CriarGrupo} alt="Criar Grupo" className="sidebar-menu-item-icon" />
            </Link>
          </div>
        </Tooltip>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-menu-item">
          <img src={Sair} alt="Sair" className="sidebar-menu-item-icon" />
        </div>
        <div className="sidebar-menu-item">
          <img src={Noturno} alt="Noturno" className="sidebar-menu-item-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
