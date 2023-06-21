import { useEffect, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./Items.css";
import axios from "axios";

export const Items = ({ items, loadItems }) => {
  const [item, setItem] = useState({
    itemName: "",
  });

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    setItem({
      itemName: color,
    });
  };

  const postItem = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/items", item);
    generateRandomColor();
    loadItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/items/${id}`);
    loadItems();
  };

  // Delete DetailOrders first in order to delete item//
  // const deleteItem = async (id) => {
  //   await axios
  //     .delete(`http://localhost:8080/orderdetails/8`)
  //     .then(() => axios.delete(`http://localhost:8080/items/${id}`));
  //   loadItems();
  // };

  return (
    <div>
      <h1>Items</h1>
      <button onClick={postItem} className="add-button">
        Add Colour
      </button>
      <div className="box-container">
        {items.map((name) => (
          <div key={name.itemId}>
            <ColorBox name={name.itemName} />
            <button onClick={() => deleteItem(name.itemId)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
