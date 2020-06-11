import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import ErrorHandling from "./ErrorHandling";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const OnSubmit = (e) => {
    e.preventDefault();
    if (text === "" || amount === "") {
      return false;
    } else {
      const newTransAdd = {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: +amount,
        //   amount: amount,  text and amount both methods are same things
      };

      addTransaction(newTransAdd);
    }
  };

  return (
    <div className=" w-6/12 mx-auto mt-6 max-w-sm">
      <h1 className="text-xl text-white">Add new transaction</h1>
      <hr className="my-4" />
      <form onSubmit={OnSubmit}>
        <ErrorHandling text={text} amount={amount} />
        <div className="block mb-1">
          <label className="text-lg text-gray-400 ">Text</label>
          <input
            className="w-full my-2 rounded-sm py-1 px-2 outline-none"
            placeholder="Enter Text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </div>
        <div className="block">
          <label className="text-lg text-gray-400 ">Amount</label>
          <input
            className="w-full my-2 rounded-sm py-1 px-2 outline-none"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>
        <div className="block">
          <input
            className={`my-3 px-6 py-2 bg-blue-600 text-white w-full rounded-md ouline:none cursor-pointer ${
              text === "" || amount === "" ? "cursor-not-allowed" : ""
            }`}
            type="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;
