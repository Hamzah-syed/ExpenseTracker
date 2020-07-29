import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
// type
import { TransactionPropType } from "../types/exTrackerTypes";

const TransactionDel: React.FC<TransactionPropType> = ({ trans }) => {
  // calling context

  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="flex ">
      <button
        onClick={() => deleteTransaction(trans.id)}
        className="bg-red-600 text-white px-4 relative my-1 focus:outline-none"
      >
        {" "}
        X{" "}
      </button>
      <div className="w-full flex justify-between relative bg-gray-100 p-2 border-solid my-1 rounded-r-sm">
        <div className="h-full  text-lg">{trans.text}</div>
        <div className="h-full  mr-2 text-lg">
          <h1>
            {trans.amount < 0 ? "-" : "+"}${Math.abs(trans.amount)}
          </h1>
        </div>
        <div
          className={`absolute inset-y-0 right-0 w-2 rounded-r-sm ${
            trans.amount < 0 ? "bg-red-600" : "bg-green-600"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TransactionDel;
