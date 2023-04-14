import { MouseEventHandler } from "react";
interface ButtonProps {
  label : string
  function? : MouseEventHandler
}
const Button = (props:ButtonProps) => {
  return (  
    <>
    <div onClick={props.function} className="Button px-4 py-2 w-fit h-fit rounded-md bg-violet-800 border-0 text-white font-sans font-semibold focus:outline-none hover:cursor-pointer hover:bg-violet-500 duration-100" >
      {props.label}
    </div>
    </>
  );
}
 
export default Button;