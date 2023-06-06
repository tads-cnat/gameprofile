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
            <Modal style={{display: "flex", justifyContent: "center"}} id="modal-entrar"
                open={open}
                onClose={handleClose}
                >
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "70%",background: "white"}} className="box-modal">
                    <h1 style={{color: "var(--main-primary)", paddingTop: "30px"}} className="text-3xl font-bold">Escolha sua posição!</h1>
                    <p style={{color: "#02A612", paddingTop: "20px", textAlign: "left", width: "70%"}} className="subTitle text-gray-100">Posições em aberto.</p>
                    <p style={{color: "#FF0000", paddingBottom: "20px", textAlign: "left", width: "70%"}} className="subTitle text-gray-100">Posições preenchidas.</p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}} className="box-map">
                        <MapEntrar />
                    </div>
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