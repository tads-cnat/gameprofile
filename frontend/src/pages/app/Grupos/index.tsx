import { useState, useEffect, Component } from 'react';
import GrupoCard from '../../../components/GrupoCard';
import axios from 'axios';

import './styles.css'


const Grupos = () => {

    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/grupos')
            .then((response) => {
                setGrupos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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