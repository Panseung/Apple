import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남우동 맛집",
    "파이썬독학",
  ]);

  const [idx, setIdx] = useState(0);

  const [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {title.map((d, i) => {
        return (
          <div className="list" key={i}>
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIdx(i);
              }}
            >
              {d}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const tmp = [...like];
                  tmp[i] += 1;
                  setLike(tmp);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <Modal title={title[idx]}></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default App;
