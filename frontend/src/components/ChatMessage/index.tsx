import './styles.css'

interface IMessage {
    id: number;
    userId: number;
    userName: string;
    avatar: string;
    message: string;
    timestamp: string;
}

const ChatMessage = (props: IMessage) => {
    return(
        <div className={`chat-message-container ${props.userId == 1 ? 'out' : 'in'}`}>
            <div className="chat-message box">
                <p className="chat-message author">{props.userName}</p>
                <p className="chat-message message">{props.message}</p>
            </div>
        </div>
    );
}

export default ChatMessage;