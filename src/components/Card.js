import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import ListItem from "./ListItem";
export default function Card(props) {
  const [count, setCount] = useState(0);

  return (
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={props.image} />
        </div>
        <div class="card_content">
          <h1 class="card_title">{props.name}</h1>
          <h2 class="card_text">Fiyat:{props.price}₺</h2>
        </div>
        <div className="count">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);

                props.setWallet(props.wallet + props.price);
              }
            }}
          >
            <HiOutlineMinus />
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => {
              if (props.wallet >= props.price) {
                setCount(count + 1);
                props.setWallet(props.wallet - props.price);
                <ListItem name={props.name} />;
              }
            }}
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>
    </li>
  );
}
