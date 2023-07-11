import './styles.css'
import ChatGroupItem from '../../../components/ChatGroupItem';
import ChatArea from '../../../components/ChatArea';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Seta from "../../../assets/sidebarIcons/Seta.svg";
import { getGroups, getPosicoes } from '../../../services/api/groups';

interface ChatProps { }

type messageModel = {
    id: number,
    userId: number,
    userName: string,
    avatar: string,
    message: string,
    timestamp: string,
}

type chatModel = {
    id: number,
    name: string,
    lastMessage: string,
    lastMessageUser: string,
    lastMessageTime: string,
    avatar: string,
    messages: messageModel[]
};

const messages: messageModel[] = [
    {
        id: 1,
        userId: 1,
        userName: 'Dina',
        avatar: `https://ui-avatars.com/api/?name=${'Giovanna'}`,
        message: 'Olá amigos!',
        timestamp: '10:00',
    },
    {
        id: 2,
        userId: 1,
        userName: 'Dina',
        avatar: `https://ui-avatars.com/api/?name=${'Giovanna'}`,
        message: 'Que horas vai ser nosso treino de segunda?',
        timestamp: '10:00',
    },
    {
        id: 3,
        userId: 2,
        userName: 'Giovanna',
        avatar: `https://ui-avatars.com/api/?name=${'Dina'}`,
        message: 'Olá',
        timestamp: '10:00',
    },
    {
        id: 4,
        userId: 2,
        userName: 'Giovanna',
        avatar: `https://ui-avatars.com/api/?name=${'Dina'}`,
        message: 'Não sei, tava marcado pra 10h',
        timestamp: '10:00',
    },
]

const idJogador = 2;

const Chat = (props: ChatProps) => {
    const [selectedGroupChat, setSelectedGroupChat] = useState<any>();
    const [groupChats, setGroupChats] = useState<chatModel[]>([]);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const [groups, posicoes] = await Promise.all([
                getGroups(),
                getPosicoes()
            ])

            const gruposQueCriei = groups.filter(group => group.criador.id == idJogador)
            const gruposQueEntrei = posicoes.filter(posicao => posicao.jogador.id === idJogador).map(item => item.grupo)
            
            const meusGrupos = [...gruposQueCriei, ...gruposQueEntrei]

            console.log(gruposQueCriei);
            console.log(gruposQueEntrei);
            
            const result: chatModel[]  = meusGrupos.map(grupo => ({
                id: grupo.id,
                name: grupo.nome,
                lastMessage: "esta foi a ultima mensagem do grupo!",
                lastMessageUser: "Tinowns",
                lastMessageTime: "10 min",
                avatar: "https://source.boringavatars.com/beam/120/Stefan?colors=909a92,3543d0",
                messages: []
            }))

            if(result.length) {
                result[0].messages = messages;
                setGroupChats(result);
            }
        }

        getData()
    }, [])


    const onMessage = (message: string, id: number): void => {
        const group = groupChats.find(group => group.id === id);
        
        if (!group) return;
        
        const index = groupChats.indexOf(group);
        group.messages.push({
            id: 4,
            userId: 1,
            userName: 'Dina',
            avatar: `https://ui-avatars.com/api/?name=${'Dina'}`,
            message: message,
            timestamp: '10:00',
        })

        groupChats[index] = group;

        setGroupChats(groupChats)
    }

    return(
        <div style={{display: "flex", maxWidth: "100%", marginTop: "60px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", position: "fixed",top: "0", width: "100px" }}>
                <Link to="/app" className="button-navigation">
                    <img src={Seta} alt="Criar grupo" />
                </Link>
            </div>
            <div className="app-area" id="chat">
                <div className="chat-sidebar">
                    <div className="chat-sidebar-header">
                        <p>Grupos</p>
                    </div>
                    <div className="chat-sidebar-groups">
                        {
                            groupChats.map((groupChat) => 
                                <ChatGroupItem 
                                    id={groupChat.id}
                                    name={groupChat.name}
                                    lastMessage={groupChat.lastMessage}
                                    lastMessageUser={groupChat.lastMessageUser}
                                    lastMessageTime={groupChat.lastMessageTime}
                                    avatar={groupChat.avatar}
                                    onClick={() => setSelectedGroupChat(groupChat)}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="chat-area">
                    {
                        selectedGroupChat ?
                            <ChatArea
                                id={selectedGroupChat.id}
                                name={selectedGroupChat.name}
                                avatar={selectedGroupChat.avatar}
                                messages={selectedGroupChat.messages}
                                onMessage={onMessage}
                            />
                        :
                            <div className="chat-area-empty">
                                <h3>Nenhum grupo selecionado</h3>
                                <p>Selecione um grupo para começar a conversar!</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Chat;