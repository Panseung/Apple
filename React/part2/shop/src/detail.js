import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

  const [noNumber, setNoNumber] = useState(false);
  return (
    <div className="container">
      {sec === true ? (
        <div>
          <YellowBtn></YellowBtn>
          <h3 style={{ cursor: "pointer" }}> 2초 이내 구매시 할인 </h3>
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
              setNoNumber(true);
            } else {
              setNoNumber(false);
            }
          }}
        ></input>
        {noNumber ? (
          <h3
            style={{
              color: "red",
              MozUserSelect: "none",
              MsUserSelect: "none",
              userSelect: "none",
            }}
          >
            숫자만 입력하세요
          </h3>
        ) : null}
      </div>
    </div>
  );
}
