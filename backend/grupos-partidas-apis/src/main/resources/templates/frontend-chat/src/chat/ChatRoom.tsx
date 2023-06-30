import { useState } from "react"
import { over } from 'stompjs'
import SockJs from 'sockjs-client'

export default function ChatRoom() {
    
    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: false,
        message: ""
    })

    const handleUserName = (event) => {
        const {value} = event.target
        setUserData({...userData, "username": value})
    }

    const registerUser = () => {

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