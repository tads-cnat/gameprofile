import grupos_mock from '../../../mock/grupos.json';
import { useState, useEffect, Component } from 'react';
import GrupoCard from '../../../components/GrupoCard';

import './styles.css'

const Grupos = () => {

    const [grupos, setGrupos] = useState(grupos_mock);

    return(
        <div className="app-area" id="grupos">

            <header className='grupos-header'>
                <div className='indicador-header'></div>
                <h1 className='ml-3 text-lg'> Posição em Aberto </h1>
            </header>


            {grupos.map((grupo) => {
                return (
                    <GrupoCard grupo={grupo} />
                );
            })}
        </div>
    );
};

export default Grupos;