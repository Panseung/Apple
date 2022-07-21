import data from "./data";
import Item from "./item";
export default function Main() {
  return (
    <div>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {data.map((d, i) => {
            return <Item data={d} idx={i} key={i}></Item>;
          })}
        </div>
      </div>
    </div>
  );
}
