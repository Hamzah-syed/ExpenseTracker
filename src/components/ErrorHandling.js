import React from "react";

const ErrorHandling = ({ text, amount }) => {
  return (
    <div
      class={`flex  bg-red-600 p-1 my-4 w-full  border-solid border-2 border-red-900  sm:rounded-l-lg animate__animated animate__fadeInRight animate__faster bg-opacity-25 ${
        text === "" || amount === "" ? "flex" : "hidden"
      }`}
    >
      <div class="self-center px-2">
        <div class="bg-red-800 w-10 h-10 rounded-full"></div>
      </div>
      <div class="self-center px-2">
        <h1 class="text-white text-base">
          <span id="errorMsg">Kindly Fill All The Feilds </span>
        </h1>
      </div>
      <div class="self-center  absolute right-0 mx-4">
        <i
          onclick="closemsg()"
          class="tim-icons icon-simple-remove text-white text-xl cursor-pointer"
        ></i>
      </div>
    </div>
  );
};
export default ErrorHandling;
