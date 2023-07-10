import './styles.css'

interface IChatGroupItem {
    id: number;
    name: string;
    lastMessage: string;
    lastMessageUser: string;
    lastMessageTime: string;
    avatar: string;
    onClick: () => void;
}

const ChatGroupItem = (props: IChatGroupItem) => {
    return(
        <div className="chat-sidebar-groups-item" onClick={() => props.onClick()}>
            <img className="chat-sidebar-groups-item-image" src={props.avatar} />
            <div className="chat-sidebar-groups-item-info">
                <div className="chat-sidebar-groups-item-name">{props.name}</div>
                <div className="chat-sidebar-groups-item-footer">
                    <div className="chat-sidebar-groups-item-message">{props.lastMessageUser}: {props.lastMessage}</div>
                    <div className="chat-sidebar-groups-item-divider" />
                    <div className="chat-sidebar-groups-item-time">{props.lastMessageTime}</div>
                </div>
            </div>
        </div>
    );
}

export default ChatGroupItem;