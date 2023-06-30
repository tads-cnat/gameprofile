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
                    <Route path="/" element={<ChatRoom />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}