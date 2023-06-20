import "../pages/Items.css";

export const ColorBox = ({ name }) => {
  return (
    <div>
      <div className="color-box">
        <div
          className="top"
          style={{
            backgroundColor: name,
          }}
        ></div>
        <div className="bottom">{name}</div>
      </div>
    </div>
  );
};
