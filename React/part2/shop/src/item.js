import { Link } from "react-router-dom";
export default function Item(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.idx}`}>
        <img
          width="80%"
          src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`}
        ></img>
      </Link>
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
      <p>{props.data.price}</p>
    </div>
  );
}
