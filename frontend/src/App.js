import Sidebar from "./components/sidebar";
//router import
import CreateRoutes from "./router";
//css import
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <CreateRoutes />
    </div>
  );
};

export default App;
