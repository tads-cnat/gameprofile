import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import React, { useState } from 'react';

import Topo from "../../../assets/lanes/dark/topo.svg";
import Selva from "../../../assets/lanes/dark/selva.svg";
import Meio from "../../../assets/lanes/dark/meio.svg";
import Suporte from "../../../assets/lanes/dark/suporte.svg";
import Atirador from "../../../assets/lanes/dark/atirador.svg";

import CardLane from '../../../components/CardLane';

import {createGroup} from '../../../services/api/groups';

import { useNavigate } from 'react-router-dom';
import { Group } from '../../../entities/group';
import MapCriar, { onChangeReturn } from '../../../components/mapCriar';

const initialState: Omit<Group, "idGrupo" | "data" | "horario"> = {
    idCriador: 2,
    nome: "",
    bloqueado: false,
    ranqueada: false,
    topo: "",
    selva: "",
    meio: "",
    atirador: "",
    suporte: ""
}

const CreateGroup: React.FC = () =>{
    const lanes = ["topo", "selva", "meio", "atirador", "suporte"]
    const navigate = useNavigate();

    const [grupo, setGrupo] = useState<Omit<Group, "idGrupo" | "data" | "horario">>(initialState);
    const [description, setDescription] = useState<string>("Topo");

    function switchRanked(){
        setGrupo({...grupo, ranqueada: !grupo.ranqueada});
    }

    function resetStates(){
        setGrupo(initialState);
    }
    
    const onMapChange =(data: onChangeReturn) => {
        setGrupo({
            ...grupo, 
            // @ts-ignore
            topo: data.topo ? 2 : null,  selva: data.selva ? 2 : null, meio: data.meio ? 2 : null, atirador: data.atirador ? 2 : null, suporte: data.suporte ? 2 : null});
    }

    async function handlerSubmmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // lanes.forEach(lane => {
        //     if(e.target[lane].checked){
        //         setGrupo({...grupo, [lane]: 2})
        //     }
        // });
        
        try{
            await createGroup(grupo)
            navigate("/app/grupos")
        }catch(err){
            console.log("chegamos aqui")
        }
        resetStates();
    }

    const changeDescription = (description: string): void => {
        setDescription(description);
    }
        
    return(
        <div className="app-area" id="create-group">
            <Box sx={{ display: 'flex' }} className='bg-gray-200 rounded p-10 w-full h-full' id="create-box">

                <form method='POST' onSubmit={handlerSubmmit} className="w-full flex flex-col justify-between">

                <h1 className="text-3xl font-bold">Crie seu grupo!</h1>
                <p className="subTitle text-gray-100">Escolher pelo menos uma Posição e o Tipo de Partida.</p>
                <div className="form-group">
                    <label className="text-2xl text-dark">Nome do Grupo:<span className="red-text">*</span></label>
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder='Insira o nome do grupo...' 
                        id="nome-grupo" 
                        className='text-xl ml-5 bg-gray-700 rounded text-gray-200 p-3 w-2/4' 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrupo({...grupo, nome: e.target.value})}
                        required/>
                </div>

                <div className='img-description'>
                    <img className={description === "Topo" ? "selected" : ""} src={Topo} onClick={() => changeDescription("Topo")}/>
                    <img className={description === "Selva" ? "selected" : ""} src={Selva} onClick={() => changeDescription("Selva")}/>
                    <img className={description === "Meio" ? "selected" : ""} src={Meio} onClick={() => changeDescription("Meio")}/>
                    <img className={description === "Atirador" ? "selected" : ""} src={Atirador} onClick={() => changeDescription("Atirador")}/>                   
                    <img className={description === "Suporte" ? "selected" : ""} src={Suporte} onClick={() => changeDescription("Suporte")}/>
                </div>

                <br />
                <br />

                <div>
                    {description === "Topo" && <p>Topo: Campeões na rota topo são os lutadores durões e solitários da equipe. O trabalho deles é proteger a própria rota e focar seu dano nos membros mais fortes da equipe inimiga.</p>}
                    {description === "Selva" && <p>Selva: Caçadores vivem pela caça. Espreitando entre as rotas com furtividade e habilidade, eles ficam atentos aos monstros da selva mais importantes e avançam no momento que o oponente baixar a guarda.</p>}
                    {description === "Meio" && <p>Meio: Campeões da rota do meio são aqueles que possuem alto dano explosivo e podem fazer de tudo, sejam sozinhos ou em equipe. Para eles, o combate é uma dança perigosa, e nela devem sempre buscar oportunidades para superar seu oponente.</p>}
                    {description === "Atirador" && <p>Atirador: Campeões da rota inferior são a fonte preciosa de dano de cada equipe e precisam ser protegidos no início de jogo até que acumulem ouro e experiência o suficiente para carregar toda a equipe até a vitória.</p>}
                    {description === "Suporte" && <p>Suporte:Campeões Suporte são os guardiões da equipe. Eles ajudam a manter seus aliados vivos e focam primordialmente em armar abates, protegendo seu parceiro na rota inferior até que fique mais forte.</p>}

                </div>

                <label className='mt-5 flex flex-row align-middle' id='select-position'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch name="rank" onChange={switchRanked}/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
                </label>


                {/* button area */}
                <div className='flex flex-row-reverse mt-5' id='button-create'>
                    <button type="submit" id='button-purple' className='rounded py-2 px-7'>Criar</button>
                </div>

                </form>            
            </Box>

            <div className='flex justify-around mt-10 map'>   
                    <MapCriar onMapChange={onMapChange} />
            </div>
        </div>
    )

}

export default CreateGroup;