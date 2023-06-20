import { useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./Items.css";

export const Items = ({ items }) => {
  const [item, setItem] = useState("");
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    setItem(color);
    console.log(item);
  };

  return (
    <div>
      <h1>Items</h1>
      <button onClick={generateRandomColor} className="add-button">
        Add Colour
      </button>
      <div className="box-container">
        {items.map((name) => (
          <ColorBox name={name.itemName} />
        ))}
      </div>
    </div>
  );
};
