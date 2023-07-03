import { MouseEventHandler, ReactNode, HtmlHTMLAttributes } from 'react'

interface buttonProps {
  customClass?: string
  buttonContent?: ReactNode
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null>
  buttonFunction?: MouseEventHandler<HTMLButtonElement>
}
const Button = ({
  customClass,
  buttonContent,
  buttonRef,
  buttonFunction
}: buttonProps) => {
  return (
    <button
      className={`h-fit w-fit rounded-md border-0 bg-white px-8 py-2 m-2 font-sans font-semibold text-violet-800 duration-100 hover:cursor-pointer hover:bg-violet-300 focus:outline-none ${customClass}`}
      onClick={buttonFunction}
      ref={buttonRef}
    >
      {buttonContent}
    </button>
  )
}
export default Button
