import "../App.css";

export const ColorBox = ({ name }) => {
  return (
    <div>
      <div className="color-box">
        <div
          className="color-box-top"
          style={{
            backgroundColor: name,
          }}
        ></div>
        <div className="color-box-bottom">{name}</div>
      </div>
    </div>
  );
};
