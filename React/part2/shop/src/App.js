import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./detail";
import Main from "./main";
import Navb from "./nav";
import data from "./data";
import axios from "axios";
import { useState } from "react";

function App() {
  const [dataLst, setDataLst] = useState(data);
  const btn = () => {
    axios
      .get(`https://codingapple1.github.io/shop/data${cnt}.json`)
      .then((res) => {
        setDataLst([...dataLst, ...res.data]);
        setCnt(cnt + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [cnt, setCnt] = useState(2);
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Main shoes={dataLst} btn={btn}></Main>} />
        <Route path="/detail/:id" element={<Detail shoes={dataLst}></Detail>} />
      </Routes>
    </div>
  );
}

export default App;
