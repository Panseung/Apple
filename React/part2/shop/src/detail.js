import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
const YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;
export default function Detail(props) {
  const [sec, setSec] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setSec(false);
    }, 2000);
  });

  const [noNumber, setNoNumber] = useState("white");

  const [tab, setTab] = useState(1);

  const [val, setVal] = useState("");
  return (
    <div className="container">
      {sec === true ? (
        <div>
          <br></br>
          <YellowBtn>
            <h3 style={{ cursor: "pointer" }}> 2초 이내 구매시 할인 </h3>
          </YellowBtn>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <h2>숫자만 입력하세요</h2>
        <input
          style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) {
              setNoNumber("red");
            } else {
              setNoNumber("white");
            }
            setVal(e.target.value);
          }}
        ></input>
        <h3
          style={{
            color: noNumber,
            MozUserSelect: "none", // 파이어폭스 드래그 방지
            MsUserSelect: "none", // 이건 몰겠다
            userSelect: "none",
          }}
        >
          숫자가 아닙니다.
        </h3>
        <h3>입력: {val}</h3>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(3);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>{tab === 1 ? <h1> 탭 1번 내용 들어갈 곳</h1> : null}</div>
      <div>{tab === 2 ? <h1> 탭 2번 내용 들어갈 곳</h1> : null}</div>
      <div>{tab === 3 ? <h1> 탭 3번 내용 들어갈 곳</h1> : null}</div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
