import Sidebar from "./components/Sidebar";
//router import
import CreateRoutes from "./router";
//css import
import "./Main.css";

const Main = () => {
  return (
    <div className="App">
      <Sidebar />
      <CreateRoutes />
    </div>
  );
};

export default Main;
