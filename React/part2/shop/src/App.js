import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./detail";
import Main from "./main";
import Navb from "./nav";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Main shoes={data}></Main>} />
        <Route path="/detail/:id" element={<Detail shoes={data}></Detail>} />
      </Routes>
    </div>
  );
}

export default App;
