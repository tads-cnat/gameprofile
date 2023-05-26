// imagens de lanes
import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";

import Tooltip from "@mui/material/Tooltip";

import "./styles.css";
import { Group } from "../../entities/group";
import { ReactElement, useEffect } from "react";

const isEmpty = (item: number | null): boolean => {
    return item === null;
};

type GrupoCardType = {
    grupo: Group, 
    onClick(): void
};

const GrupoCard = ({ grupo, onClick }: GrupoCardType): ReactElement => {
    const { nome, data, horario, ranqueada, topo, selva, meio, suporte, atirador } = grupo;

    const databack = new Date(data);
    const dataFormatada = databack.toLocaleDateString("pt-BR", { timeZone: "UTC" });

    // remove the last 3 characters from the string
    const horaFormatada = horario ? horario.substring(0, horario.length - 3) : "";

    return (
        <div className="card-group mt-5" onClick={onClick}>
            <div>
                <h1 className="white-text">{nome}</h1>
                <div className="submenu">
                    <p>{dataFormatada}</p>
                    <p>{horaFormatada}h</p>
                    <p>-</p>
                    <p>{`${ranqueada ? "Competitivo" : "Casual"}`}</p>
                </div>
            </div>
            <div className="lanes-section">
                <Tooltip title="Topo" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Topo} alt="topo" />
                        </span>

                        <div className={`${topo ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Selva" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Selva} alt="selva" />
                        </span>
                        <div className={`${selva ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Meio" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Meio} alt="meio" />
                        </span>
                        <div className={`${meio ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Suporte" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Suporte} alt="suporte" />
                        </span>
                        <div
                            className={`${suporte ? "indicador-off" : "indicador"}`}
                        ></div>
                    </a>
                </Tooltip>
                <Tooltip title="Atirador" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Atirador} alt="atirador" />
                        </span>
                        <div
                            className={`${atirador ? "indicador-off" : "indicador"}`}
                        ></div>
                    </a>
                </Tooltip>
            </div>
        </div>
    );
};

export default GrupoCard;
