import { useEffect, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "../App.css";
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
    <div className="items-master">
      <div className="container-color-input-master">
        <div className="container-item-input">
          <span className="text-element-color-input">Type a hex value</span>
          <input
            className="input-field-color-input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            pattern="[a-fA-F0-9]{6}"
            maxLength={6}
            size={6}
          />

          <button
            className="add-button-generate-color-input"
            onClick={addColor}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="beaker"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="container-generate-colour">
          <span className="text-element-color-input">
            Generate a random hex value
          </span>
          <button
            onClick={postItem}
            className="add-button-generate-color-input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="beaker"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="box-container">
        {items.map((name) => (
          <div className="item-unit" key={name.itemId}>
            <ColorBox name={name.itemName} />
            <button
              className="delete-color-button"
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
