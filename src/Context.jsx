import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [totalCount, setTotalCount] = useState(4);
  const [totalAmount, setTotalAmount] = useState(2199.96);

  const decreaseCount = (x) => {
    setTotalCount(totalCount - x);
  };

  const increaseTotalCount = () => {
    setTotalCount(totalCount + 1);
  };

  const decreaseTotalCount = () => {
    setTotalCount(totalCount - 1);
  };

  const totalAmountIncrease = (price) => {
    setTotalAmount(Number((totalAmount + price).toFixed(2)));
  };
  const totalAmountDecrease = (price) => {
    setTotalAmount(Number((totalAmount - price).toFixed(2)));
  };

  return (
    <GlobalContext.Provider
      value={{
        totalCount,
        totalAmount,
        totalAmountIncrease,
        totalAmountDecrease,
        increaseTotalCount,
        decreaseTotalCount,
        decreaseCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
