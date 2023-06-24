import "../App.css";
import { Button } from "./Button";

export const Paginate = ({ previousPage, nextPage }) => {
  return (
    <div className="pagination-container">
      <Button
        id="btnPrevious"
        type="Submit"
        className="btn-reset mr-10"
        value="<"
        clickHandler={previousPage}
      />
      <Button
        id="btnNext"
        type="Submit"
        className="btn-reset"
        value=">"
        clickHandler={nextPage}
      />
      <p>*missing page numbers</p>
    </div>
  );
};
