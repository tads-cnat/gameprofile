import { useState } from "react"
import { over } from 'stompjs'
import SockJs from 'sockjs-client'

var stompClient = null

export default function ChatRoom() {

    const [publicChats, setPublicChats] = useState([])

    const [privateChats, setPrivateChats] = useState(new Map())

    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: false,
        message: ""
    })

    const handleUserName = (event: { target: { value: any } }) => {
        const {value} = event.target
        setUserData({...userData, "username": value})
    }

    const registerUser = () => {
        let Sock = new Sock('http://localhost:8080/ws')
        stompClient = over(Sock)
        stompClient.connect({}, onConnected, onError)
    }

    const onConnected = () => {
        setUserData({...userData, "connected": true})
        stompClient.subscribe('/chatroom/public', onPublicMessageReceived)
        stompClient.subscribe('/user'+userData.username+'/private', onPrivateMessageReceived)
    }

    const onPublicMessageReceived = (payload: { body: string }) => {
        let payloadData = JSON.parse(payload.body)
        switch(payloadData.status) {
            case 'JOIN':
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, [])
                    setPrivateChats(new Map(privateChats))
                }
            case 'MESSAGE':
                publicChats.push(payloadData);
                setPublicChats({...publicChats})
                break;
        }
    }

    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload)
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData)
            setPrivateChats(new Map(privateChats))
        }
        else {
            let list = []
            list.push(payloadData)
            privateChats.set(payloadData.senderName, list)
            setPrivateChats(new Map(privateChats))
        }
    } 

    const onError = (err) => {

    }

    return (
        <div className='container'>
            {userData.connected?
            <div></div>
            :
            <div className=''>
                <input 
                    id='user_name'
                    placeholder="Informe seu nome de usuário"
                    value={userData.username}
                    onChange={handleUserName}
                />
                <button type="button" onClick={registerUser}>

                </button>
            </div>}
        </div>
    )

}