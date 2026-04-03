import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const increaseBy = (amount) => {
    setCount((prev) => prev + amount);
  };
  const decreaseBy = (amount) => {
    setCount((prev) => prev - amount);
  };
  const reset = () => {
    setCount(0);
  };

  return { count, increase, decrease, increaseBy, decreaseBy, reset };
}

export default useCounter;
