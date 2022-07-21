import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./detail";
import Main from "./main";
import Navb from "./nav";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/detail" element={<Detail></Detail>} />
      </Routes>
    </div>
  );
}

export default App;
