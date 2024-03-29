import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { getPlayer } from '../../../services/api/player';
import { Player } from '../../../entities/player';
import { getGroups, getPosicoes } from '../../../services/api/groups';
import { Group } from '../../../entities/group';
import "./index.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardActionArea, CardContent, CardMedia, Modal, Typography } from '@mui/material';
import HomeGroupCard from '../../../components/HomeGroupCard';
import MapEntrar from '../../../components/mapEntrar';

import CriarGrupo from "../../../assets/sidebarIcons/CriarGrupo.svg";
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
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

const idJogador = 2;

const Home = () => {
    const [user, setUser] = useState<Player>(initialState);
    const [groups, setGroups] = useState<Group[]>([]);
    const [open, setOpen] =  useState<boolean>(false);
    const [currentGroup, setCurrentGroup] =  useState<Group | null>(null);

    const handleClose = ()=> setOpen(false);
    const onClick = (group: Group) => {
        setCurrentGroup(group) 
        setOpen(true);
    } 

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const [_user, _groups, posicoes] = await Promise.all([
                getPlayer(idJogador),
                getGroups(),
                getPosicoes()
            ])

            const gruposQueNaoCriei = _groups.filter(group => group.criador.id !== idJogador)
            const gruposQueEntrei = posicoes.filter(posicao => posicao.jogador.id === idJogador).map(item => item.grupo.id)
            const gruposQuePossoEntrar = gruposQueNaoCriei.filter(grupo => !gruposQueEntrei.includes(grupo.id));
            
            setUser(_user);
            setGroups(gruposQuePossoEntrar)
        }

        getData()
    }, [])
    //carregando dados do usuário aqui
    
    return (
        <div style={{display: "flex", maxWidth: "100%", marginTop: "60px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100% - 60px)", position: "fixed",top: "0", width: "100px", marginTop: "60px" }}>
                <Link to="/app/criar-grupo" className="button-navigation">
                    <img src={CriarGrupo} alt="Criar grupo" />
                </Link>
            </div>
            <div className="app-area pr-10 py-10" id="home">
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded pb-5 w-full'>
                        <img className="profile-image" src="https://img.ibxk.com.br/2019/07/26/26171514413327.jpg" alt="" />
                        <Box className='ml-2'> 
                            <h1 className='flex'> {user.nome} </h1>
                            <h1> Nickname: {user.nickname}</h1>
                            <h1>{user.email}</h1>
                        </Box>
                    </Box>
                </div>
                <p className="text-2xl text-dark p-3 font-sans">Entre em um grupo</p>
                <Carousel 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    containerClass='pb-12 mb-5'
                >
                    {groups.map(group => (
                        <HomeGroupCard key={group.id} group={group} onClick={onClick} />
                    ))}
                </Carousel>
                <p className="text-2xl text-dark p-3 font-sans">Outros assuntos</p>
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
                        <a key={item.titulo} href={item.link} target='_blank'> 
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
                <Modal style={{display: "flex", justifyContent: "center", alignItems: "center"}} id="modal-entrar"
                    open={open}
                    onClose={handleClose}
                    >
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70%",background: "white", height: "700px"}}>
                        <h1 style={{color: "var(--main-primary)", paddingTop: "30px"}} className="text-3xl font-bold">Escolha sua posição!</h1>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="box-map">
                            <MapEntrar group={currentGroup} />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Home;