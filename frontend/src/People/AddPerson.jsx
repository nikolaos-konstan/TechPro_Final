import "./AddPerson.css";

export const AddPerson = () => {
  return (
    <div>
      <form>
        <h2>Add Person</h2>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            pattern="[A-Za-z]+"
            maxLength="255"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            pattern="[A-Za-z]+"
            maxLength="255"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength="255"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
