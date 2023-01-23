import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import player from '../../../mock/player.json';
import { useState } from 'react';

import CardLane from '../../../components/CardLane';

import {createGroup} from '../../../services/api/group';

import { useNavigate } from 'react-router-dom';


//Guardar os dados do grupo com UseStates




const CreateGroup = () =>{
    const navigate = useNavigate();

    const [grupo, setGrupo] = useState({
        idCriador: player.id,
        nome: null,
        data: null,
        horario: null,
        bloqueado: false,
        ranqueada: false,
        topo: null,
        selva: null,
        meio: null,
        atirador: null,
        suporte: null
    });

    function switchRanked(){
        setGrupo({...grupo, ranqueada: !grupo.ranqueada});
    }

    function resetLanes(){
        setGrupo({...grupo, topo: null, selva: null, meio: null, atirador: null, suporte: null})
    }

    function ajustHour(){
        setGrupo(grupo.horario = grupo.horario+":00");
    }

    function resetStates(){
        setGrupo({
            idCriador: player.id,
            nome: '',
            data: '',
            horario: '',
            bloqueado: false,
            ranqueada: false,
            topo: '',
            selva: '',
            meio: '',
            atirador: '',
            suporte: ''
        });
    }

    function handlerSubmmit(e){
        e.preventDefault();
        resetLanes();
        ajustHour();
        const lanes = ["topo", "selva", "meio", "atirador", "suporte"]
        lanes.forEach(lane => {
            if(e.target[lane].checked){
                setGrupo({...grupo, [lane]: player.id})
            }
        });
        
        try{
            createGroup(grupo)
        }catch(err){
            console.log("chegamos aqui")
        }
        resetStates();


    }
        
    return(
        <div className="w-full h-full p-14">
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
                    onChange={(e) => setGrupo({...grupo, horario: e.target.value})}
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
                    <button action='submmit' className='bg-purple-700 rounded text-gray-200 py-2 px-7'>Criar</button>
                    <a href="/" className='bg-gray-400 py-2 px-7 rounded mr-5'>Cancelar</a>
                </div>

                </form>
            
            
            </Box>
        </div>
    )

}

export default CreateGroup;