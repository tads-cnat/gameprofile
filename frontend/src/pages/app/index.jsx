import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {

    return(
        <>
            <Sidebar/>
            <div className="w-full">
                <Outlet />
            </div>
        </>
    )
};

export default App;