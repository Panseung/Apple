import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남우동 맛집",
    "파이썬독학",
  ]);

  const [idx, setIdx] = useState(0);

  const [like, setLike] = useState([0, 0, 0]);

  const [inputVal, setInputVal] = useState("");

  const submit = () => {
    title.push(inputVal);
    like.push(0);
    setInputVal("");
    document.getElementById("input_box").value = null;
  };

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
                onClick={(e) => {
                  e.stopPropagation();
                  const tmp = [...like];
                  tmp[i] += 1;
                  setLike(tmp);
                }}
              >
                👍
              </span>
              {like[i]}
              <span
                onClick={() => {
                  const tmp = [];
                  title.map((d2, i2) => {
                    return i2 !== i ? tmp.push(d2) : null;
                  });
                  setTitle(tmp);

                  const tLike = [];
                  like.map((d2, j) => {
                    return j !== i ? tLike.push(d2) : null;
                  });
                  setLike(tLike);
                }}
                style={{ color: "red", cursor: "pointer" }}
              >
                삭제
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input
        id="input_box"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          submit();
        }}
      >
        입력
      </button>
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
