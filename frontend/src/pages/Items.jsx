import "./Items.css";

export const Items = ({ items }) => {
  return (
    <div>
      <h1>Items</h1>
      <button class="add-button">Add Colour</button>

      <div className="color-box">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};
