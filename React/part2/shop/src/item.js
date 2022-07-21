export default function Item(props) {
  return (
    <div className="col-md-4">
      <img
        width="80%"
        src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`}
      ></img>
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
      <p>{props.data.price}</p>
    </div>
  );
}
