import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
//types
import { TransactionType, initialStateType } from "../types/exTrackerTypes";

// create global state
const initialstate: initialStateType = {
  Transaction: [{ id: 1, text: "Cash", amount: 200 }],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

export const TransactionContext = createContext(initialstate);

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialstate);

  //Actions
  //Actions types is handiling in  TransactionReducer
  function deleteTransaction(id: number) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transactionData: TransactionType) {
    dispatch({
      type: "Add_Transaction",
      payload: transactionData,
    });
  }

  return (
    <div>
      <TransactionContext.Provider
        value={{
          Transaction: state.Transaction,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </div>
  );
};
