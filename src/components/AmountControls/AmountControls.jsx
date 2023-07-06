import React from "react";
import { useDispatch } from "react-redux";
import { withdrawByFive, withdrawByTen } from "../../reducers/amountSlice";

const AmountControls = () => {
  const dispatch = useDispatch();

  const incrementByTenHandler = () => {
    dispatch(withdrawByTen());
  };

  const incrementByFiveHandler = () => {
    dispatch(withdrawByFive());
  };

  return (
    <>
      <button onClick={incrementByTenHandler}>WITHDRAW $10,000</button>
      <button onClick={incrementByFiveHandler}>WITHDRAW $5,000</button>
    </>
  );
};

export default AmountControls;
