import React from "react";
import Header from "./_Layout/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionalList from "./components/TransactionalList";
import AddTransaction from "./components/AddTransaction";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="bg-gray-900 h-auto pb-16">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionalList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
