export default function ListItem(props) {
  return (
    <div className="ListItem">
      <li>
        <h1>lololo</h1>
        <h1>-{props.name}</h1>
        <p>{props.count}</p>
        <p>{props.count * props.price}</p>
      </li>
    </div>
  );
}
