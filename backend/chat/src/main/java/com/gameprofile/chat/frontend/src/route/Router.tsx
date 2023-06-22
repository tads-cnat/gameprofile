import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Homepage from '../components/Homepage'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )

}