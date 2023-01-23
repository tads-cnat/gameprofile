import { useState, useEffect, Component } from 'react';
import GrupoCard from '../../../components/GrupoCard';

import mock from '../../../mock/grupos.json';

import {getGroups} from '../../../services/api/group';

const Grupos = () => {

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        // getGroups().then((response) => {
        //     setGrupos(response.data);
        // });

        setGrupos(mock);

    }, []); 

    return (
        <div className='mx-auto lg:w-4/5 h-full p-10'>

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