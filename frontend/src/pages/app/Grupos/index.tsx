import { useState, useEffect } from 'react';
import GrupoCard from '../../../components/GrupoCard';
import { Group } from '../../../entities/group';

import {getGroups} from '../../../services/api/groups';
import { Link } from 'react-router-dom';


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
                    <Link to={`/app/grupo/${grupo.idGrupo}`} key={grupo.idGrupo}>
                        <GrupoCard key={grupo.idGrupo} grupo={grupo} />
                    </Link>
                );
            })}
        </div>
    );
}

export default Grupos;