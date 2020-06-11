import React, { useReducer } from "react";

const UseReucer = () => {
  let initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "dexrement":
        return state - 1;

      case "reset":
        return (state = 0);
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-gray-100">
      <h1>{count}</h1>
      <button
        className="px-4 py-2 bg-blue-600 mx-2 text-white cursor-pointer"
        onClick={() => dispatch("increment")}
      >
        Increament
      </button>
      <button
        className="px-4 py-2 bg-blue-600 mx-2 text-white cursor-pointer"
        onClick={() => dispatch("dexrement")}
      >
        decrement
      </button>
      <button
        className="px-4 py-2 bg-blue-600 mx-2 text-white cursor-pointer"
        onClick={() => dispatch("reset")}
      >
        reset
      </button>
    </div>
  );
};

export default UseReucer;
