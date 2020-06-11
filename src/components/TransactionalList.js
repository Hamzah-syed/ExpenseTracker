import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

const TransactionalList = () => {
  const { transaction } = useContext(TransactionContext);

  return (
    <div className=" w-6/12 mx-auto mt-6 max-w-sm">
      <h1 className="text-xl text-white">History</h1>
      <hr className="my-4" />

      {transaction.map((trans) => (
        <Transaction trans={trans} key={trans.id} />
      ))}
    </div>
  );
};
export default TransactionalList;
