import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";
import Maplol from "../../assets/img/mapLol.jpg"

import "./styles.css";
import { Group } from "../../entities/group";
import { FunctionComponent, ReactElement } from "react";


const Map: FunctionComponent = (): ReactElement => {
    return(
        <div id="map-entrar">
            <img src={Maplol} alt="mapLol" />
            <div id="topo" className="position-box"><img src={Topo} alt="Topo" /></div>
            <div id="selva" className="position-box"><img src={Selva} alt="Selva" /></div>
            <div id="meio" className="position-box"><img src={Meio} alt="Meio" /></div>
            <div id="suporte" className="position-box"><img src={Suporte} alt="Suporte" /></div>
            <div id="atirador" className="position-box"><img src={Atirador} alt="Atirador" /></div>
        </div>
        
    )
};

export default Map;
