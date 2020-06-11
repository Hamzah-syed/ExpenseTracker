import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const IncomeExpense = () => {
  const {transaction}= useContext(TransactionContext);

  const amount = transaction.map((trans) => trans.amount);
  // const total = amount.reduce((a,b) => (a += b), 0).toFixed(2)

  const income = amount
    .filter((a) => a > 0)
    .reduce((v1, v2) => (v1 += v2), 0)
    .toFixed(2);

  const expense = (
    amount.filter((a) => a < 0).reduce((v1, v2) => (v1 += v2), 0) * -1
  ).toFixed(2);

  return (
    <div className="bg-gray-100 flex  w-6/12 mx-auto my-1 max-w-sm">
      <div className="flex-1 p-4 bg-gray-100 border-solid border-r-2">
        <h1 className="text-center sm:text-xl text-sm text-black">INCOME</h1>
        <h1 className="text-center sm:text-2xl text-sm text-green-500">
          {income}
        </h1>
      </div>
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-center sm:text-xl text-sm text-black">EXPENSE</h1>
        <h1 className="text-center sm:text-2xl text-sm text-red-500">
          {expense}
        </h1>
      </div>
    </div>
  );
};
export default IncomeExpense;
