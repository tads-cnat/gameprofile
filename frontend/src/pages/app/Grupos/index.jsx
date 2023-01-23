import { useState, useEffect, Component } from 'react';
import GrupoCard from '../../../components/GrupoCard';
import api  from '../../../services/api/api.json'
import axios from 'axios';

import {getGroups} from '../../../services/api/group';

const Grupos = () => {

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: api.api_url + '/grupos',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response) => {
            setGrupos(response.data);
        }
        );
    }, []);


    return (
        console.log(grupos),
        <div className='mx-auto lg:w-4/5 h-full p-10'>

            <div className='pesquisa-filtro'>
                <input type="text" placeholder='Pesquisar' />
            </div>

            <div className='flex flex-row w-fit align-middle justify-center items-center'>
                <div className='indicador-header'></div>
                <h1 className='ml-3 text-lg'> Posição em Aberto </h1>
            </div>

            {grupos.map((grupo) => {
                return (
                    <GrupoCard grupo={grupo} />
                );
            })}
        </div>
    );
}

export default Grupos;