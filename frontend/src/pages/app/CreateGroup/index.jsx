import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'
import player from '../../../mock/player.json';
import { useState } from 'react';

import CardLane from '../../../components/CardLane';

import {createGroup} from '../../../services/api/group';

//Guardar os dados do grupo com UseStates




const CreateGroup = () =>{

    const [grupo, setGrupo] = useState({
        id_criador: player.id,
        nome: '',
        data: '',
        horario: '',
        posicao_selecionada: '',
        posicoes_reservadas: [],
        posicoes_abertas: [],
        ranqueada: false
    });

    function switchRanked(){
        setGrupo({...grupo, ranqueada: !grupo.ranqueada});
    }

    function handlerSubmmit(e){
        e.preventDefault();
        const lanes = ["top", "jungle", "mid", "adc", "sup"];
        setGrupo({...grupo, posicoes_reservadas: grupo.posicoes_reservadas.length = 0, posicoes_abertas: grupo.posicoes_abertas.length = 0});
        lanes.forEach(lane => {
            if(e.target[lane].checked || lane === grupo.posicao_selecionada){
                setGrupo({...grupo, posicoes_reservadas: grupo.posicoes_reservadas.push(lane)});
            }else{
                setGrupo({...grupo, posicoes_abertas: grupo.posicoes_abertas.push(lane)});
            }
        });
        setGrupo({...grupo, posicao_selecionada: e.target.pick.value})
        
        createGroup(grupo);



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
                    value={grupo.hora}
                    onChange={(e) => setGrupo({...grupo, hora: e.target.value})}
                    id="hora-grupo" 
                    className='text-xl ml-5 p-3 bg-gray-700 rounded text-gray-200'
                    required/>
                </label>

                <div className='flex justify-around mt-10'>   

                    <CardLane 
                    lane='top' 
                    name='Topo'/>
                    <CardLane 
                    lane='jungle' 
                    name='Selva'/>
                    <CardLane 
                    lane='mid' 
                    name='Meio'/>
                    <CardLane 
                    lane='adc' 
                    name='Atirador'/>
                    <CardLane 
                    lane='sup' 
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