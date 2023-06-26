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
  const [photoToUpload, setPhotoToUpload] = useState<File | undefined>()
  const InvertLoading = () => {
    setIsLoading(!isLoading)
  }
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    InvertLoading()
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (!inputRef?.current) {
        InvertLoading()
        console.log('Input.current is null.')
        return
      }
      inputRef.current.value = ''
      InvertLoading()
      setPhotoToUpload(selectedFile)
    }
  }
  const handleUploadClick = async () => {
    if (photoToUpload) {
      await notifyPromise(uploadImage(photoToUpload))
    } else {
      console.log("Provided image isn't valid")
    }
  }

  const handleBrowseClick = () => {
    inputRef.current?.click()
  }

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
              className="hidden"
              type="file"
              id="files"
              onChange={handleSelection}
              ref={inputRef}
            />
            <button
              className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none"
              onClick={handleBrowseClick}
            >
              Browse
            </button>
            <button
              className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none"
              onClick={handleUploadClick}
            >
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
