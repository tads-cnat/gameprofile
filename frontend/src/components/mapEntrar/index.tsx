import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";
import Maplol from "../../assets/img/mapLol.jpg"

import "./styles.css";
import { Group } from "../../entities/group";
import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api/api.json";
import { Button } from "@mui/material";

type MapEntrarType = {
    group: Group | null
}

type Posicoes = "TOPO" | "SELVA" | "MEIO" | "SUPORTE" | "ATIRADOR";

const idJogador = 2;

const MapEntrar = ({group}: MapEntrarType): ReactElement => {
    const [posicoes, setPosicoes] = useState<Posicoes[]>([])
    const [posicaoEscolhida, setPosicaoEscolhida] = useState<Posicoes | null>(null);

    useEffect(() => {
        getPosicao();
    }, [])

    const getPosicao = async (): Promise<void> => {
        try {
            const {data } = await axios.get<Record<string, any>[]>(`${api.api_url}posicaogrupo`, {
                headers: {
                  "Content-Type": "application/json",
                },
            })

            const result: Posicoes[] = data.filter(item => item.grupo.id === group?.id).map(item => item.posicaoEscolhida);
            const posicaoCriador = data.find(item => item.grupo.id === group?.id)?.grupo.posicaoEscolhida;
    
            result.push(posicaoCriador)
            setPosicoes(result)
        } catch (error) {
            console.log(error)
        }
    } 

    const entrarGrupo = async (): Promise<void> => {
        try {
            const body = {
                grupo: {
                    id: group?.id
                },
                jogador: {
                    id: idJogador
                },
                posicaoEscolhida: "MEIO"
            };
    
            const response = await axios.post(api.api_url + "posicaogrupo/entrar", body, {
                headers: {
                  "Content-Type": "application/json",
                },
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    } 

    return(
        <div>
            <div id="map-entrar">
                <p>{group?.nome}</p>
                <img src={Maplol} alt="mapLol" />
                <div 
                    id="topo"
                    className={`position-box ${posicoes.includes("TOPO") ? "ocupado" : "livre"}`}
                    onClick={() => {
                        if (!posicoes.includes("TOPO")) setPosicaoEscolhida("TOPO")}
                    } 
                >
                    <img src={Topo} alt="Topo" />
                </div>
                <div 
                    id="selva"
                    className={`position-box ${posicoes.includes("SELVA") ? "ocupado" : "livre"}`}
                    onClick={() => {
                        if (!posicoes.includes("SELVA")) setPosicaoEscolhida("SELVA")}
                    } 
                >
                    <img src={Selva} alt="Selva" />
                </div>
                <div 
                    id="meio"
                    className={`position-box ${posicoes.includes("MEIO") ? "ocupado" : "livre"}`}
                    onClick={() => {
                        if (!posicoes.includes("MEIO")) setPosicaoEscolhida("MEIO")}
                    } 
                >
                    <img src={Meio} alt="Meio" />
                </div>
                <div 
                    id="suporte"
                    className={`position-box ${posicoes.includes("SUPORTE") ? "ocupado" : "livre"}`}
                    onClick={() => {
                        if (!posicoes.includes("SUPORTE")) setPosicaoEscolhida("SUPORTE")}
                    } 
                >
                    <img src={Suporte} alt="Suporte" />
                </div>
                <div 
                    id="atirador"
                    className={`position-box ${posicoes.includes("ATIRADOR") ? "ocupado" : "livre"}`}
                    onClick={() => {
                        if (!posicoes.includes("ATIRADOR")) setPosicaoEscolhida("ATIRADOR")}
                    } 
                >
                    <img src={Atirador} alt="Atirador" />
                </div>
            </div>
            <div>
                <p>Posição escolhida: <span>{posicaoEscolhida || ""}</span></p>
                <Button onClick={entrarGrupo} variant="contained">Entrar</Button>
            </div>
        </div> 
    )
};

export default MapEntrar;
