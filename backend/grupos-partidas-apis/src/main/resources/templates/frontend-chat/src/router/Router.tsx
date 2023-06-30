import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import ChatRoom from '../chat/ChatRoom'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/chat-romm" element={<ChatRoom />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}