import { ColorBox } from "../Items/ColorBox";
import "./Items.css";

export const Items = ({ items }) => {
  return (
    <div>
      <h1>Items</h1>
      <button class="add-button">Add Colour</button>
      <div className="box-container">
        {items.map((name) => (
          <ColorBox name={name.itemName} />
        ))}
      </div>
    </div>
  );
};
