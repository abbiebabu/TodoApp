import tick from "../assets/tick.png";
import no_tick from "../assets/no_tick.png";
import del from "../assets/del.png";

export const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => {
        toggle(id);
      }}
      className="flex ml-3 my-8 items-center px-5 "
    >
      <div className="flex flex-1 gap-5 items-center cursor-pointer ">
        <img className="h-10 w-10" src={isComplete ? tick : no_tick} alt="" />
        <p
          className={`text-slate-200 text-[18px] ${
            isComplete ? "line-through decoration-slate-200" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={del}
        alt=""
        className="w-6 cursor-pointer mr-4"
      />
    </div>
  );
};
//comment
