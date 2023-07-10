import './styles.css';
import ChatMessage from '../ChatMessage';
import { useState } from 'react';

type Message = {
    id: number;
    userId: number;
    userName: string;
    avatar: string;
    message: string;
    timestamp: string;
}

interface IChatArea {
    id: number;
    name: string;
    avatar: string;
    messages: Message[];
    onMessage(message: string, id: number): void
}

const ChatArea = (props: IChatArea) => {
    const [text, setText] = useState<string>("");

    return(
        <div className="chat-area-container">
            <div className="chat-area-header">
                <div className="chat-area-header-info">
                    <img src={props.avatar} />
                    <p>{props.name}</p>
                </div>
                <p>i</p>
            </div>
            <div className="chat-area-messages">
                {props.messages.map((message) => 
                    <ChatMessage 
                        key={message.id}
                        id={message.id}
                        avatar={props.avatar}
                        userId={message.userId}
                        userName={message.userName}
                        message={message.message}
                        timestamp={message.timestamp}
                    /> 
                )}
            </div>
            <div className="chat-area-input">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite sua mensagem..." />
                <button 
                    onClick={() => {
                        props.onMessage(text, props.id)
                        setText("");
                    }} 
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default ChatArea;