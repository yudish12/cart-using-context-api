import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../Context";

const Cart = () => {
  const { totalCount } = useContext(GlobalContext);
  return (
    <div className="cart">
      <FaCartPlus className="cart-icon" />
      <div className="amount-container">
        <p className="total-amount">{totalCount}</p>
      </div>
    </div>
  );
};

export default Cart;
