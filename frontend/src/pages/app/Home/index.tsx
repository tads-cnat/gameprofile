import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { getPlayer } from '../../../services/api/player';
import { Player } from '../../../entities/player';
import { getGroups } from '../../../services/api/groups';
import { Group } from '../../../entities/group';
import { getMatches } from '../../../services/api/match';
import { Match } from '../../../entities/match';
import "./index.css"

const initialState: Player = {
    id: 0,
    nickname: "",
    nome: "",
    email: "",
    senha: "",
    nascimento: new Date(),
    entrouEm: new Date(),
    editadoEm: new Date(),
    idLol: null,
}


const Home = () => {
    const [user, setUser] = useState<Player>(initialState);
    const [groups, setGroups] = useState<Group[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const [_user, _groups, _matches] = await Promise.all([
                getPlayer(2),
                getGroups(),
                getMatches()
            ])

            setUser(_user);
            setGroups(_groups)
            setMatches(_matches)
        }

        getData()
    }, [])
    //carregando dados do usuário aqui
    
    return (
        <div className="app-area p-10" id="home">
            <div>
                <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-full'>
                    <img className="profile-image" src="https://img.ibxk.com.br/2019/07/26/26171514413327.jpg" alt="" />
                    <Box className='ml-2'> 
                        <h1 className='flex'> {user.nome} </h1>
                        <h1> AKA: {user.nickname}</h1>
                        <h1>{user.email}</h1>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', direction: 'row'}} className='mt-10 h-4/6'>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-4/6 mr-2 h-full'>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10  w-2/6 ml-2 h-full'>
                    </Box>
                </Box>
            </div>
            <div style={{display: "flex"}}>
                <div className='box'>
                    <h2 style={{marginBottom: "15px"}}>Minhas Partidas</h2>
                    <div style={{display: "flex"}}>
                        {matches.map(match => (
                            <div className='card' key={match.idPartida}>
                                <h3>{new Date(match.data).toLocaleDateString()}</h3>
                                <p>{match.ranqueada ? "Competitivo" : "Casual"}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='box'>
                    <h2 style={{marginBottom: "15px"}}>Meus Grupos</h2>
                    <div style={{display: "flex"}}>
                        {groups.map(group => (
                            <div className='card' key={group.idGrupo}>
                                <h3>{group.nome}</h3>
                                <p>{new Date(group.data).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;