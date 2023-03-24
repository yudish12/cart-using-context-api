import React from "react";
import Header from "./Header";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { MobilePhones } from "../data";
import Phone from "./Phone";

const Home = () => {
  const { totalCount, totalAmount } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <div className="mobile-container">
        {totalCount ? (
          <>
            {MobilePhones.map((e) => (
              <Phone {...e} />
            ))}
          </>
        ) : (
          <div className="home">
            <h2>Your Bag Is Empty</h2>
          </div>
        )}
      </div>
      <hr className="line" />
      <div className="total">
        <h4>Total</h4>
        <span>${totalAmount}</span>
      </div>
    </>
  );
};

export default Home;
