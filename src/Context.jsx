import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [totalCount, setTotalCount] = useState(4);
  const [totalAmount, setTotalAmount] = useState(2199.96);

  const increaseTotalCount = () => {
    setTotalCount(totalCount + 1);
  };

  const decreaseTotalCount = () => {
    setTotalCount(totalCount - 1);
  };

  const totalAmountIncrease = (price) => {
    setTotalAmount(Number(totalAmount + price));
  };
  const totalAmountDecrease = (price) => {
    setTotalAmount(Number(totalAmount - price));
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
