import MapCriar from '../../../components/mapCriar';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

import CardLane from '../../../components/CardLane';

import { Group } from '../../../entities/group';

import './styles.css';

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

const Grupo = () => {
    const [grupo, setGrupo] = useState<Omit<Group, "idGrupo">>(initialState);
    function switchRanked(){
        setGrupo({...grupo, ranqueada: !grupo.ranqueada});
    }
    return(
        <div className="app-area">
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
                    required/>
            </div>
            <div className="container-map">
                <MapCriar />
            </div>
            <div className='flex flex-row-reverse mt-5'>
            <button type="submit" id='button-purple' className='rounded py-2 px-7'> Criar </button>
            <a href="/" className='py-2 px-7 rounded mr-5 button-grey'> Cancelar </a>
            </div>
            <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch name="rank" onChange={switchRanked}/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
            </label>
        </div>
    );
};

export default Grupo;