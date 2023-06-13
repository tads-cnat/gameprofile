import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import React, { useState } from 'react';

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
        
    return(
        <div className="app-area" id="create-group">
            <Box sx={{ display: 'flex' }} className='bg-gray-200 rounded p-10 w-full h-full'>

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

                <div className='flex justify-around mt-10'>   
                    <MapCriar onMapChange={onMapChange} />
                </div>

                <label className='mt-5 flex flex-row align-middle' id='select-position'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch name="rank" onChange={switchRanked}/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
                </label>


                {/* button area */}
                <div className='flex flex-row-reverse mt-5'>
                    <button type="submit" id='button-purple' className='rounded py-2 px-7'>Criar</button>
                    <a href="/" className='py-2 px-7 rounded mr-5 button-grey'>Cancelar</a>
                </div>

                </form>            
            </Box>
        </div>
    )

}

export default CreateGroup;