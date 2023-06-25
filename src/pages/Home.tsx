import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { notifyMessage, notifyPromise, notifySuccess } from '../utils/toasts'
import ProgressList from '../components/ProgressList'
import spinner from '../components/spinner'
import { useState, useRef } from 'react'
import { uploadImage } from '../utils/firebase'
const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const InvertLoading = () => {
    setIsLoading(!isLoading)
  }
  const [photoToUpload, setPhotoToUpload] = useState<File | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleSelection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    InvertLoading()
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      const data = await notifyPromise(uploadImage(selectedFile))
      console.log(data)
      if (!inputRef?.current) {
        console.log(inputRef)
        console.log('wrong')
        InvertLoading()
        return
      }
      inputRef.current.value = ''
      console.log('After notifySuccess')
      InvertLoading()
      return data
    }
  }
  console.log(inputRef.current)
  return (
    <>
      <ToastContainer />
      <NavBar />
      <div className="home-content flex flex-grow flex-col font-semibold text-white">
        <div className="upload-section flex w-full flex-col items-center bg-gray-900 py-8">
          <div className="m-2 flex flex-col items-center">
            <ArrowUpOnSquareIcon className="m-4 w-28" />
            <p>Upload your image or drag it over here.</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="file"
              id="files"
              onChange={handleSelection}
              ref={inputRef}
            />
            <button
              className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none"
              onClick={inputRef.current?.click}
            >
              Browse
            </button>
            <button className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none">
              Upload
            </button>
          </div>
        </div>
        <ProgressList></ProgressList>
      </div>
    </>
  )
}
export default Home
