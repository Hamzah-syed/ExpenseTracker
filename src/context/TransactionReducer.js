export default (state, action) => {
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
