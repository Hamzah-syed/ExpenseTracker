import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { expenseTrackerErrorType } from "../types/ErrorsType";

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<expenseTrackerErrorType>({
    textError: "",
    AmountError: "",
  });

  const { addTransaction } = useContext(TransactionContext);

  const OnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text === "") {
      setError({ ...error, textError: "block" });
      return false;
    }
    if (amount === 0) {
      setError({ ...error, AmountError: "block" });
      return false;
    } else {
      const newTransAdd = {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: +amount,
        //   amount: amount,  text and amount both methods are same things
      };
      setText("");
      setAmount(0);
      addTransaction(newTransAdd);
    }
  };

  return (
    <div className=" w-6/12 mx-auto mt-6 max-w-sm">
      <h1 className="text-xl text-white">Add new transaction</h1>
      <hr className="my-4" />
      <form onSubmit={OnSubmit}>
        <div className="block mb-1">
          <label className="text-lg text-gray-400 ">Text</label>
          <div className="my-2">
            <input
              className="w-full  rounded-sm py-1 px-2 outline-none"
              placeholder="Enter Text..."
              value={text}
              onChange={(e) => {
                setText(String(e.target.value));
                setError({ ...error, textError: "" });
              }}
              type="text"
            />
            <h1
              className={`text-red-500 ${
                error.textError === "" ? "hidden" : "block"
              } `}
            >
              Text Is Required !
            </h1>
          </div>
        </div>
        <div className="block">
          <label className="text-lg text-gray-400 ">Amount</label>
          <div className="my-2">
            <input
              className="w-full rounded-sm py-1 px-2 outline-none"
              placeholder="Enter Amount..."
              value={amount === 0 ? "" : amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
                setError({ ...error, AmountError: "" });
              }}
              type="number"
            />
            <h1
              className={`text-red-500 ${
                error.AmountError === "" ? "hidden" : "block"
              } `}
            >
              {" "}
              Amount Is Required !
            </h1>
          </div>
        </div>
        <div className="block">
          <input
            className={`my-3 px-6 py-2 bg-blue-600 text-white w-full rounded-md ouline:none cursor-pointer focus:outline-none `}
            type="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;
