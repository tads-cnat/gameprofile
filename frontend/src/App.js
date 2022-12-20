import Sidebar from "./components/Sidebar";
//router import
import CreateRoutes from "./router";
//css import
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <CreateRoutes />
    </div>
  );
};

export default App;
