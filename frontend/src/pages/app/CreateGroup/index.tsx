import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import { useState } from 'react';

import CardLane from '../../../components/CardLane';

import {createGroup} from '../../../services/api/groups';

import { useNavigate } from 'react-router-dom';
import { Group } from '../../../entities/group';

const initialState: Omit<Group, "idGrupo"> = {
    idCriador: 2,
    nome: "",
    data: "",
    horario: "",
    bloqueado: false,
    ranqueada: false,
    topo: "",
    selva: "",
    meio: "",
    atirador: "",
    suporte: ""
}

const CreateGroup = () =>{
    const navigate = useNavigate();

    const [grupo, setGrupo] = useState<Omit<Group, "idGrupo">>(initialState);

    function switchRanked(){
        setGrupo({...grupo, ranqueada: !grupo.ranqueada});
    }

    function resetLanes(){
        setGrupo({...grupo, topo: "", selva: "", meio: "", atirador: "", suporte: ""})
    }

    function resetStates(){
        setGrupo(initialState);
    }

    async function handlerSubmmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        resetLanes();
        const lanes = ["topo", "selva", "meio", "atirador", "suporte"]
        lanes.forEach(lane => {
            // @ts-ignore
            if(e.target[lane].checked){
                setGrupo({...grupo, [lane]: 2})
            }
        });
        
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

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-3xl text-dark">Nome do Grupo:<span className="red-text">*</span></h1>
                    <input 
                    type="text" 
                    name="nome" 
                    placeholder='Insira o nome do grupo...' 
                    value={grupo.nome}
                    onChange={(e) => setGrupo({...grupo, nome: e.target.value})}
                    id="nome-grupo" 
                    className='text-xl ml-5 bg-gray-700 rounded text-gray-200 p-3 w-2/4' 
                    required/>
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-2xl my-auto">Data:<span className="red-text">*</span></h1>
                    <input 
                    type="date" 
                    name="data" 
                    value={grupo.data}
                    onChange={(e) => setGrupo({...grupo, data: e.target.value})}
                    id="data-grupo" 
                    className='text-xl ml-5 bg-gray-700 rounded text-gray-200 p-3'
                    required/>
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-2xl my-auto">Horário:<span className="red-text">*</span></h1>
                    <input 
                    type="time" 
                    name="hora" 
                    value={grupo.horario}
                    onChange={(e) => setGrupo({...grupo, horario: e.target.value + ":00"})}
                    id="hora-grupo" 
                    className='text-xl ml-5 p-3 bg-gray-700 rounded text-gray-200'
                    required/>
                </label>

                <div className='flex justify-around mt-10'>   

                    <CardLane 
                    lane='topo' 
                    name='Topo'/>
                    <CardLane 
                    lane='selva' 
                    name='Selva'/>
                    <CardLane 
                    lane='meio' 
                    name='Meio'/>
                    <CardLane 
                    lane='atirador' 
                    name='Atirador'/>
                    <CardLane 
                    lane='suporte' 
                    name='Suporte'/>
                </div>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch color="secondary" name="rank" onChange={switchRanked}/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
                </label>


                {/* button area */}
                <div className='flex flex-row-reverse mt-5'>
                    <button type="submit" className='bg-purple-700 rounded text-gray-200 py-2 px-7'>Criar</button>
                    <a href="/" className='bg-gray-400 py-2 px-7 rounded mr-5'>Cancelar</a>
                </div>

                </form>
            
            
            </Box>
        </div>
    )

}

export default CreateGroup;