import { useState, useEffect } from 'react';
import GrupoCard from '../../../components/GrupoCard';
import { Group } from '../../../entities/group';

import {getGroups} from '../../../services/api/groups';


const Grupos = () => {
    const [grupos, setGrupos] = useState<Group[]>([]);

    useEffect(() => {
        getGroups().then((response) => {
            setGrupos(response);
        });
    }, []); 

    return (
        <div className="app-area" id="grupos">

            <header className='grupos-header'>
                <div className='indicador-header'></div>
                <h1 className='ml-3 text-lg'> Posição em Aberto </h1>
            </header>

            {grupos.map((grupo) => {
                return (
                    <GrupoCard key={grupo.idGrupo} grupo={grupo} />
                );
            })}
        </div>
    );
}

export default Grupos;