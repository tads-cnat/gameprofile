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
import { Button, Card } from "@mui/material";

type GrupoCardType = {
    group: Group, 
    onClick?(group: Group): void
};

const HomeGroupCard = ({ group, onClick = () => {} }: GrupoCardType): ReactElement => {
    const { nome, ranqueada } = group;

    return (
        <Card className="home-group-card" onClick={() => onClick(group)}>
            <div>
                <h1 className="white-text">{nome}</h1>
                <div className="submenu">
                    <p>{`${ranqueada ? "Competitivo" : "Casual"}`}</p>
                </div>
            </div>
            <div className="lanes-section">
                <Tooltip title="Topo" placement="top" arrow>
                    <span>
                        <img src={Topo} alt="topo" />
                    </span>
                </Tooltip>
                <Tooltip title="Selva" placement="top" arrow>
                        <span>
                            <img src={Selva} alt="selva" />
                        </span>
                </Tooltip>
                <Tooltip title="Meio" placement="top" arrow>
                        <span>
                            <img src={Meio} alt="meio" />
                        </span>
                </Tooltip>
                <Tooltip title="Suporte" placement="top" arrow>
                    <span>
                        <img src={Suporte} alt="suporte" />
                    </span>
                </Tooltip>
                <Tooltip title="Atirador" placement="top" arrow>
                    <span>
                        <img src={Atirador} alt="atirador" />
                    </span>
                </Tooltip>
            </div>
            <div className="button-container">
                <Button variant="contained">Entrar</Button>
            </div>
        </Card>
    );
};

export default HomeGroupCard;
