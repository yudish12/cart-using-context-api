import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Phone = ({ id, name, price, image }) => {
  const [amount, setAmount] = useState(1);
  const {
    increaseTotalCount,
    decreaseTotalCount,
    decreaseCount,
    totalAmountIncrease,
    totalAmountDecrease,
  } = useContext(GlobalContext);

  const removeItem = (price) => {
    decreaseCount(amount);
    totalAmountDecrease(Number(Number(price) * Number(amount)));
    setAmount(0);
  };

  const handleIncrease = (price) => {
    increaseTotalCount();
    setAmount(amount + 1);
    totalAmountIncrease(price);
  };
  const handleDecrease = (price) => {
    decreaseTotalCount();
    setAmount(amount - 1);
    totalAmountDecrease(price);
  };

  return amount ? (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="phone-info">
        <h5>{name}</h5>
        <span>{price}</span>
        <button className="remove-btn" onClick={() => removeItem(price)}>
          remove
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          value={price}
          onClick={() => handleIncrease(price)}
          className="amount-btn"
        >
          <FaChevronUp className="icon" />
        </button>
        <span className="amount">{amount}</span>
        <button onClick={() => handleDecrease(price)} className="amount-btn">
          <FaChevronDown className="icon" />
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Phone;
