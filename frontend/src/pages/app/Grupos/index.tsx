import { useState, useEffect } from 'react';
import GrupoCard from '../../../components/GrupoCard';
import { Group } from '../../../entities/group';

import {getGroups} from '../../../services/api/groups';
import { Box, Modal } from '@mui/material';
import MapEntrar from '../../../components/mapEntrar';

const Grupos = () => {
    const [grupos, setGrupos] = useState<Group[]>([]);
    const [open, setOpen] =  useState<boolean>(false);

    useEffect(() => {
        getGroups().then((response) => {
            setGrupos(response);
        });
    }, []); 

    const handleClose = ()=> setOpen(false);

    return (
        <div className="app-area" id="grupos">
            <Modal id="modal-entrar"
                open={open}
                onClose={handleClose}
                >
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}} className="box-map">
                    <MapEntrar />
                </div>
            </Modal>
            <header className='grupos-header'>
                <div className='indicador-header'></div>
                <h1 className='ml-3 text-lg'> Posição em Aberto </h1>
            </header>

            {grupos.map((grupo) => {
                return (
                    <GrupoCard onClick={() => setOpen(true)} key={grupo.idGrupo} grupo={grupo} />
                );
            })}
        </div>
    );
}

export default Grupos;