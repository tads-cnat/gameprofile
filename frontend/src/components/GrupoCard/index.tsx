// imagens de lanes
import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";

import Tooltip from "@mui/material/Tooltip";

import "./styles.css";
import { Group } from "../../entities/group";
import { ReactElement } from "react";

const isEmpty = (item: string): boolean => {
    return item.length > 0;
};

type GrupoCardType = {
    grupo: Group
};

const GrupoCard = ({ grupo }: GrupoCardType): ReactElement => {
    const { nome, data, horario, ranqueada, topo, selva, meio, suporte, atirador } = grupo;

    const databack = new Date(data);
    const dataFormatada = databack.toLocaleDateString("pt-BR", { timeZone: "UTC" });

    // remove the last 3 characters from the string
    const horaFormatada = horario.substring(0, horario.length - 3);

    return (
        <div className="card-group mt-5">
            <div>
                <h1>{nome}</h1>
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

                        <div className={`${!isEmpty(topo) ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Selva" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Selva} alt="selva" />
                        </span>
                        <div className={`${!isEmpty(selva) ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Meio" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Meio} alt="meio" />
                        </span>
                        <div className={`${!isEmpty(meio) ? "indicador-off" : "indicador"}`}></div>
                    </a>
                </Tooltip>
                <Tooltip title="Suporte" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Suporte} alt="suporte" />
                        </span>
                        <div
                            className={`${!isEmpty(suporte) ? "indicador-off" : "indicador"}`}
                        ></div>
                    </a>
                </Tooltip>
                <Tooltip title="Atirador" placement="top" arrow>
                    <a href="#">
                        <span>
                            <img src={Atirador} alt="atirador" />
                        </span>
                        <div
                            className={`${!isEmpty(atirador) ? "indicador-off" : "indicador"}`}
                        ></div>
                    </a>
                </Tooltip>
            </div>
        </div>
    );
};

export default GrupoCard;
