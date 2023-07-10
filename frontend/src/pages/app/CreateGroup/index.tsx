import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import React, { useState } from 'react';

import Topo from "../../../assets/lanes/dark/topo.svg";
import Selva from "../../../assets/lanes/dark/selva.svg";
import Meio from "../../../assets/lanes/dark/meio.svg";
import Suporte from "../../../assets/lanes/dark/suporte.svg";
import Atirador from "../../../assets/lanes/dark/atirador.svg";

import { useNavigate } from 'react-router-dom';
import MapCriar from '../../../components/mapCriar';
import axios from 'axios';
import api from "../../../services/api/api.json"

const CreateGroup: React.FC = () =>{
    const navigate = useNavigate();

    const [nome, setNome] = useState<string>("");
    const [ranked, setRanked] = useState<boolean>(false);
    const [description, setDescription] = useState<string>("Topo");

    function resetStates(){
        setNome("");
        setRanked(false);
    }


    async function handlerSubmmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if (nome === "") return;
        
        const group = {
            nome,
            bloqueado: false,
            ranqueada: ranked,
            posicaoEscolhida: description.toUpperCase(),
            criador: {
                id: 2,
                nickname: "dinapgomes",
                nome: "Dina",
                email: "dina@gmail.com",
                nascimento: "2000-10-18",
                entrouEm: null,
                editadoEm: null,
                idLol: null
            }
        }
        
        try{
            await axios.post(api.api_url + "grupos", group, {
                headers: {
                  "Content-Type": "application/json",
                },
            })
            
            navigate("/app")
        }catch(err){
            console.log(err);
            
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
                <p className="subTitle text-gray-100">Escolher sua Posição e o Tipo de Partida.</p>
                <div className="form-group">
                    <label className="text-2xl text-dark">Nome do Grupo:<span className="red-text">*</span></label>
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder='Insira o nome do grupo...' 
                        id="nome-grupo" 
                        className='text-xl bg-gray-700 rounded text-gray-200 p-3 w-100' 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        required/>
                </div>

                <div className='img-description'>
                    <img className={description === "Topo" ? "selected" : ""} src={Topo} onClick={() => changeDescription("Topo")}/>
                    <img className={description === "Selva" ? "selected" : ""} src={Selva} onClick={() => changeDescription("Selva")}/>
                    <img className={description === "Meio" ? "selected" : ""} src={Meio} onClick={() => changeDescription("Meio")}/>
                    <img className={description === "Suporte" ? "selected" : ""} src={Suporte} onClick={() => changeDescription("Suporte")}/>
                    <img className={description === "Atirador" ? "selected" : ""} src={Atirador} onClick={() => changeDescription("Atirador")}/>                   
                </div>

                <br />
                <br />

                <div className='text-description'>
                    {description === "Topo" && <p>Topo: Campeões na rota topo são os lutadores durões e solitários da equipe. O trabalho deles é proteger a própria rota e focar seu dano nos membros mais fortes da equipe inimiga.</p>}
                    {description === "Selva" && <p>Selva: Caçadores vivem pela caça. Espreitando entre as rotas com furtividade e habilidade, eles ficam atentos aos monstros da selva mais importantes e avançam no momento que o oponente baixar a guarda.</p>}
                    {description === "Meio" && <p>Meio: Campeões da rota do meio são aqueles que possuem alto dano explosivo e podem fazer de tudo, sejam sozinhos ou em equipe. Para eles, o combate é uma dança perigosa, e nela devem sempre buscar oportunidades para superar seu oponente.</p>}
                    {description === "Suporte" && <p>Suporte:Campeões Suporte são os guardiões da equipe. Eles ajudam a manter seus aliados vivos e focam primordialmente em armar abates, protegendo seu parceiro na rota inferior até que fique mais forte.</p>}
                    {description === "Atirador" && <p>Atirador: Campeões da rota inferior são a fonte preciosa de dano de cada equipe e precisam ser protegidos no início de jogo até que acumulem ouro e experiência o suficiente para carregar toda a equipe até a vitória.</p>}

                </div>

                <label className='mt-5 flex flex-row align-middle' id='select-position'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch name="rank" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRanked(e.target.checked)}/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
                </label>


                {/* button area */}
                <div className='flex flex-row-reverse mt-5' id='button-create'>
                    <button type="submit" id='button-purple' className='rounded py-2 px-7'>Criar</button>
                </div>

                </form>            
            </Box>

            <div className='flex justify-around mt-10 map'>   
                <MapCriar currentPosition={description} onMapChange={(position) => changeDescription(position)} />
            </div>
        </div>
    )

}

export default CreateGroup;