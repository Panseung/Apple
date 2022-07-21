import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남우동 맛집",
    "파이썬독학",
  ]);

  const [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLike([like[0] + 1, like[1], like[2]]);
            }}
          >
            👍
          </span>
          {like[0]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLike([like[0], like[1] + 1, like[2]]);
            }}
          >
            👍
          </span>
          {like[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[2]}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLike([like[0], like[1], like[2] + 1]);
            }}
          >
            👍
          </span>
          {like[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
