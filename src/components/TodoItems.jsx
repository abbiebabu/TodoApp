import React from "react";
import tick from "../assets/tick.png";
import untick from "../assets/untick.png";

export const TodoItems = (list) => {
  return (
    <div className="flex mx-70 my-16 items-center px-5 bg-zinc-700 rounded-xl py-">
      <div className="flex flex-1 gap-5 items-center  ">
        <img className="h-10 w-10" src={tick} alt="" />
        learn coding
      </div>
    </div>
  );
};
