import { TransactionType } from "../types/exTrackerTypes";
// import { Actions } from "../types/exTrackerTypes";

type Actions =
  | { type: "Delete_Transaction"; payload: number }
  | { type: "Add_Transaction"; payload: TransactionType };

export default (state: { Transaction: TransactionType[] }, action: Actions) => {
  switch (action.type) {
    case "Delete_Transaction":
      return {
        ...state,
        Transaction: state.Transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add_Transaction":
      return {
        ...state,
        Transaction: [action.payload, ...state.Transaction],
      };

    default:
      return state;
  }
};
