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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

const carroselList = [
    {
        titulo: "Campeões",
        descricao: "Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.",
        img: "https://www.gamerinfo.com.br/wp-content/uploads/2017/03/campe%C3%B5es-de-lol-1.png",
        link: "https://www.leagueoflegends.com/pt-br/champions/"
    },
    {
        titulo: "Noticias",
        descricao: "Saiba todas as noticias do jogo clicando aqui!",
        img: "https://portalcorreio.com.br/portalcorreio/arquivos/2022/09/db7551a9ef5b764a188ac95da726c304.jpg",
        link: "https://www.leagueoflegends.com/pt-br/news/"
    },{
        titulo: "Como jogar",
        descricao: "Existe muita coisa para se aprender sobre o League, então começaremos com o básico. Explore o guia clicando aqui para ter um resumo sobre o modo de jogo mais jogado.",
        img: "https://www.esportelandia.com.br/wp-content/uploads/2019/11/Como-jogar-LOL.jpg",
        link: "https://www.leagueoflegends.com/pt-br/how-to-play/"
    },{
        titulo: "Notas das atualizações",
        descricao: "Veja sobre última atualização",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc040386ef2ab37c9/60ad02eab29743655f633928/Patch_11.11_Infographic_v2_por-BR.png",
        link: "https://www.leagueoflegends.com/pt-br/news/tags/patch-notes/"
    },
]

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
                        <h1> Nickname: {user.nickname}</h1>
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
            <div style={{display: "flex", marginBottom: "30px"}}> 
                <div className='box'>
                    <h2 style={{marginBottom: "15px"}}>Meus Grupos</h2>
                    <div className="card-wrapper">
                        {groups.map(group => (
                            <div className='card' key={group.idGrupo}>
                                <h3>{group.nome}</h3>
                                <p>{new Date(group.data).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                autoPlay={true}
                infinite={true}
                containerClass='pb-12'
            >
                { carroselList.map(item => (
                    <a href={item.link} target='_blank'> 
                    <Card style={{height: "100%"}} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={item.img}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.titulo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.descricao}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </a>

                ))}
            </Carousel>
        </div>
    );
};

export default Home;