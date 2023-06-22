import { useEffect, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./Items.css";
import axios from "axios";

export const Items = ({ items, loadItems }) => {
  const [item, setItem] = useState({
    itemName: "",
  });
  //I generate a color straight away when the page loads
  useEffect(() => {
    generateRandomColor();
  }, []);

  //Colour Input
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    const hexNumber = value.replace(/[^a-fA-F0-9]/g, "").substring(0, 6);
    setInputValue(hexNumber);
    loadItems();
  };

  const addColor = async () => {
    if (inputValue.length === 6) {
      await axios.post("http://localhost:8080/items", {
        itemName: "#" + inputValue,
      });
      setInputValue("");
      loadItems();
    }
  };
  //Colour Input End

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

  return (
    <div>
      <h1>Items</h1>
      <div className="container-color-input">
        <span className="text-element-color-input">
          Type a colour. Use characters "a" to "f" and digits 0-9
        </span>
        <input
          className="input-field-color-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          pattern="[a-fA-F0-9]{6}"
          maxLength={6}
          size={6}
        />

        <button className="add-button-color-input" onClick={addColor}>
          Add Colour
        </button>
        <span className="text-element-color-input">
          Or Generate a random item
        </span>
        <button onClick={postItem} className="add-button-color-input">
          Generate Colour
        </button>
      </div>
      <div className="box-container">
        {items.map((name) => (
          <div key={name.itemId}>
            <ColorBox name={name.itemName} />
            <button
              className="add-button-color-input"
              onClick={() => deleteItem(name.itemId)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
