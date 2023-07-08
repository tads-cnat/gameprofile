import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";
import Maplol from "../../assets/img/mapLol.jpg"

import "./styles.css";
import { Group } from "../../entities/group";
import React, { useEffect, useState } from "react";

import Switch from '@mui/material/Switch';

type Props={
    onMapChange: (position: string) => void,
    currentPosition: string
}

const MapCriar: React.FC<Props> = ({onMapChange, currentPosition}) => {

    return(
        <div id="map-criar">
            <img src={Maplol} alt="mapLol" />
            <div id="topo" className="position-box">
                <div className="position-box-img" onClick={() => onMapChange("Topo")}>
                    <img className={currentPosition === "Topo" ? "selected" : ""} src={Topo} alt="Topo" />
                </div>
            </div>
            <div id="selva" className="position-box">
                <div className="position-box-img" onClick={() => onMapChange("Selva")}>
                    <img className={currentPosition === "Selva" ? "selected" : ""}src={Selva} alt="Selva" />
                </div>
            </div>
            
            <div id="meio" className="position-box">
            <div className="position-box-img" onClick={() => onMapChange("Meio")}>
                <img className={currentPosition === "Meio" ? "selected" : ""} src={Meio} alt="Meio" />
            </div>
            </div>

            <div id="suporte" className="position-box">
            <div className="position-box-img" onClick={() => onMapChange("Suporte")}>
                <img className={currentPosition === "Suporte" ? "selected" : ""} src={Suporte} alt="Suporte" />
            </div>
            </div>
            <div id="atirador" className="position-box">
            <div className="position-box-img" onClick={() => onMapChange("Atirador")}>
                <img className={currentPosition === "Atirador" ? "selected" : ""} src={Atirador} alt="Atirador" />
            </div>
            </div>
        </div>
        
    )
};

export default MapCriar;
