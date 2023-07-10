import './styles.css'
import ChatGroupItem from '../../../components/ChatGroupItem';
import ChatArea from '../../../components/ChatArea';
import { useState } from 'react';

interface ChatProps { }

const Chat = (props: ChatProps) => {
    const [selectedGroupChat, setSelectedGroupChat] = useState<any>();

    let groupChats = [
        {
            id: 1,
            name: "LOUD",
            lastMessage: "esta foi a ultima mensagem do grupo!",
            lastMessageUser: "Tinowns",
            lastMessageTime: "50 min",
            avatar: "https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51",
            messages: [
                {
                    id: 1,
                    userId: 1,
                    userName: 'Giovanna',
                    avatar: `https://ui-avatars.com/api/?name=${'Giovanna'}`,
                    message: 'Olá amigos!',
                    timestamp: '10:00',
                },
                {
                    id: 2,
                    userId: 1,
                    userName: 'Giovanna',
                    avatar: `https://ui-avatars.com/api/?name=${'Giovanna'}`,
                    message: 'Que horas vai ser nosso treino de segunda?',
                    timestamp: '10:00',
                },
                {
                    id: 3,
                    userId: 2,
                    userName: 'Dina',
                    avatar: `https://ui-avatars.com/api/?name=${'Dina'}`,
                    message: 'Olá',
                    timestamp: '10:00',
                },
                {
                    id: 4,
                    userId: 2,
                    userName: 'Dina',
                    avatar: `https://ui-avatars.com/api/?name=${'Dina'}`,
                    message: 'Não sei, tava marcado pra 10h',
                    timestamp: '10:00',
                },
            ]
        },
        {
            id: 2,
            name: "LOUD Academy",
            lastMessage: "esta foi a ultima mensagem do grupo!",
            lastMessageUser: "Robo",
            lastMessageTime: "3 d",
            avatar: "https://source.boringavatars.com/bauhaus/120/Stefan?colors=264653,2a9d8f,e9c46a",
            messages: []
        },
        {
            id: 3,
            name: "LOUD Trainer",
            lastMessage: "esta foi a ultima mensagem do grupo!",
            lastMessageUser: "Ceos",
            lastMessageTime: "2 sem",
            avatar: "https://source.boringavatars.com/pixel/120/Stefan?colors=26a653,2a1d8f,79646a",
            messages: []
        }
    ];

    return(
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
                        />
                    :
                        <div className="chat-area-empty">
                            <h3>Nenhum grupo selecionado</h3>
                            <p>Selecione um grupo para começar a conversar!</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Chat;