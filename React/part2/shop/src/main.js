import Item from "./item";
export default function Main(props) {
  return (
    <div>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((d, i) => {
            return <Item data={d} idx={i} key={i}></Item>;
          })}
        </div>
      </div>
    </div>
  );
}
