import { useParams } from "react-router-dom";
import styled from "styled-components";

const YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;
export default function Detail(props) {
  const { id } = useParams();
  return (
    <div className="container">
      <YellowBtn></YellowBtn>
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
      </div>
    </div>
  );
}
