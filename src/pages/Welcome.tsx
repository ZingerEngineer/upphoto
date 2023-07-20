import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <>
      <div className="welcome-content-wrapper w-full h-full p-5 flex flex-col justify-center items-center text-white">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          className="w-80"
          draggable="false"
        ></img>
        <p className="label text-4xl font-bold">Welcome to UpPhoto</p>
        <p>Where you can upload any image you want.</p>
        <div className="buttons-wrapper flex flex-row items-center justify-center">
          <Link
            to={'login'}
            className="h-fit w-fit rounded-md border-0 bg-white px-8 py-2 m-2 font-sans font-semibold text-violet-800 duration-100 hover:cursor-pointer hover:bg-violet-300 focus:outline-none"
          >
            Login
          </Link>
          <Link
            to={'signup'}
            className="h-fit w-fit rounded-md border-0 bg-white px-8 py-2 m-2 font-sans font-semibold text-violet-800 duration-100 hover:cursor-pointer hover:bg-violet-300 focus:outline-none"
          >
            Signup
          </Link>
          <Link
            to={'uploader'}
            className="h-fit w-fit rounded-md border-0 bg-white px-8 py-2 m-2 font-sans font-semibold text-violet-800 duration-100 hover:cursor-pointer hover:bg-violet-300 focus:outline-none"
          >
            Uploader
          </Link>
        </div>
      </div>
    </>
  )
}
export default Welcome
