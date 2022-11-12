import "./styles.css";
import Card from "./components/Card";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

import { useState } from "react";

export default function App() {
  const [wallet, setWallet] = useState(50);

  const foods = [
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "tost",
      price: 10
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "tost",
      price: 10
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "tost",
      price: 10
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "tost",
      price: 10
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "tost",
      price: 10
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "köfte dürüm",
      price: 22
    },
    {
      image:
        "https://www.odditynoise.com/wp-content/uploads/2022/07/pepperoni-pizza-abob-c.jpg",
      name: "Pizza Tost",
      price: 17
    }
  ];
  return (
    <div className="App">
      <div className="Header">
        <button
          onClick={() => {
            if (wallet != 0) {
              setWallet(wallet - 1);
            }
          }}
        >
          <HiOutlineMinus />
        </button>
        <h1 type>{wallet}₺</h1>
        <button
          onClick={() => {
            setWallet(wallet + 1);
          }}
        >
          <HiOutlinePlus />
        </button>
      </div>
      <div className="container">
        <ul class="cards">
          {foods.map((food) => (
            <Card
              wallet={wallet}
              setWallet={setWallet}
              image={food.image}
              price={food.price}
              name={food.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
