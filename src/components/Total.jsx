import React, { useContext } from "react";
import { UserContext } from "../App";

function Total() {
  const { subtotals } = useContext(UserContext);

  const overallSubtotal = Object.values(subtotals).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="body-footer">
      <div className="bf-content">
        <h2 className="total">TOTAL :</h2>
      </div>
      <div className="bf-content">
        <h2>$ {overallSubtotal.toFixed(2)} </h2>
        <p className="total-p">Grand Total</p>
      </div>
    </div>
  );
}

export default Total;
