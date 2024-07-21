import React, { useState, useContext } from "react";
import { UserContext } from "../App";

function Card() {
  const { data, setData, subtotals, setSubtotals } = useContext(UserContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    const updatedQuantities = { ...quantities, [itemId]: quantity };
    const item = data.find((item) => item.id === itemId);
    const subtotal = quantity * item.price;
    const updatedSubtotals = { ...subtotals, [itemId]: subtotal };

    setQuantities(updatedQuantities);
    setSubtotals(updatedSubtotals);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col mb-5 cantainer">
          <div className="card h-100">
            <div className=" first-box badge bg-dark text-white position-absolute">
              <img
                className="card-img-top cardimg"
                src={`${item.image}`}
                alt="..."
              />
            </div>

            <div className="card-body p-4">
              <div className="text-center">
                <h4 className="fw-bolder">{item.title}</h4>
                <span className=" category text-muted text-decoration-line-through">
                  {item.category}
                </span>
                <p className="des">{item.description}</p>
              </div>
            </div>
            <div className=" card-rate p-4 pt-0 border-top-0 bg-transparent">
              <h3> $ {item.price}</h3>
              <div className="qua-box">
                <span>Qty : </span>
                <select
                  className="quantity"
                  value={quantities[item.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                >
                  <option value={0}> 0</option>
                  <option value={1}> 1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>

                <div className="text-center">
                  <button
                    className="btn btn-outline-dark mt-auto"
                    onClick={() => handleQuantityChange(item.id, 0)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="foot=fbox">
              <h5>SUBTOTAL :</h5>
              <h5>SHIPPING :</h5>
            </div>
            <div className="footer-foot">
              <input
                className="subtotal"
                type="text"
                value={subtotals[item.id] || 0}
                readOnly
              />
              <p>FREE</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
