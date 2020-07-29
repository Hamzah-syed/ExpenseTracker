import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionDel from "./Transaction";
// type
import { TransactionType } from "../types/exTrackerTypes";

const TransactionalList = () => {
  const { Transaction } = useContext(TransactionContext);

  return (
    <div className=" w-6/12 mx-auto mt-6 max-w-sm">
      <h1 className="text-xl text-white">History</h1>
      <hr className="my-4" />

      {Transaction.map((trans: TransactionType) => (
        <TransactionDel trans={trans} key={trans.id} />
      ))}
    </div>
  );
};
export default TransactionalList;
