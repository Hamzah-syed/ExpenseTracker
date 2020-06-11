import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const { transaction } = useContext(TransactionContext);

  const allAmounts = transaction.map((allAmount) => allAmount.amount);
  const total = allAmounts.reduce((a, b) => (a += b), 0).toFixed(2);

  return (
    <div className=" w-6/12 mx-auto mt-6 max-w-sm my-4">
      <h1 className="text-lg text-white">Your Balance</h1>
      <h1 className="text-3xl text-white">${total}</h1>
    </div>
  );
};

export default Balance;
