import tick from "../assets/tick.png";
import untick from "../assets/untick.png";
import del from "../assets/del.png";

export const TodoItems = ({text}) => {
  return (
    <div className="flex ml-3 my-8 items-center px-5 ">
      <div className="flex flex-1 gap-5 items-center cursor-pointer ">
        <img className="h-10 w-10" src={tick} alt="" />
        <p className="text-slate-200 text-[18px]">{text}</p>
      </div>
      <img src={del} alt="" className="w-6 cursor-pointer mx-2" />
    </div>
  );
};
