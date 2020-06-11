import React, { useReducer, createContext } from "react";
import TransactionReducer from "./TransactionReducer";

// create global state
const initialstate = {
  Transaction: [{ id: 1, text: "Cash", amount: 200 }],
};

export const TransactionContext = createContext(initialstate);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialstate);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transactionData) {
    dispatch({
      type: "Add_Transaction",
      payload: transactionData,
    });
  }

  return (
    <div>
      <TransactionContext.Provider
        value={{
          transaction: state.Transaction,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </div>
  );
};
