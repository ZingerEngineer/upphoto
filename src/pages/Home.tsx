import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { notifyMessage, notifyPromise, notifySuccess } from '../utils/toasts'
import ProgressList from '../components/Preview'
import Spinner from '../components/Spinner'
import { useState, useRef, useEffect } from 'react'
import { uploadImage } from '../utils/firebase'
import Preview from '../components/Preview'
const Home = () => {
  const handleDrage = () => {
    console.log('dragging')
  }
  const [loading, setLoading] = useState(false)
  const uploadButtonRef = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (uploadButtonRef.current !== null && loading) {
      uploadButtonRef.current.disabled = true
    }
  }, [loading, uploadButtonRef])
  const [photoToUpload, setPhotoToUpload] = useState<File | undefined>()
  const [currentImageURL, setCurrentImageURL] = useState<string | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (!inputRef?.current) {
        console.log('Input.current is null.')
        return
      }
      inputRef.current.value = ''
      setPhotoToUpload(selectedFile)
    }
  }
  const handleUploadClick = async () => {
    try {
      if (
        uploadButtonRef.current?.disabled === false &&
        !loading &&
        photoToUpload
      ) {
        if (photoToUpload) {
          setLoading((loading) => !loading)
          const res = await notifyPromise(uploadImage(photoToUpload))
          setCurrentImageURL(res.url)
        } else {
          console.log("Provided image isn't valid")
        }
        setLoading((loading) => !loading)
        if (uploadButtonRef.current !== null) {
          uploadButtonRef.current.disabled = false
        }
      }
    } catch (error) {
      console.log(error)
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
        <div
          className="upload-section flex w-full flex-col items-center bg-gray-900 py-8 border-dashed border-4 border-white/20"
          onDrag={handleDrage}
        >
          <div className="m-2 flex flex-col items-center">
            <ArrowUpOnSquareIcon className="m-4 w-28 opacity-20" />
            <p>Upload or drag your image over here.</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="hidden"
              type="file"
              id="files"
              onChange={handleSelection}
              ref={inputRef}
            />
            <div className="buttons flex flex-row">
              <button
                className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none"
                onClick={handleBrowseClick}
              >
                Browse
              </button>
              <button
                className="Button h-fit w-fit rounded-md border-0 bg-violet-800 px-8 py-2 m-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none  disabled:bg-purple-300"
                onClick={handleUploadClick}
                ref={uploadButtonRef}
              >
                {loading ? <Spinner /> : 'Upload'}
              </button>
            </div>
          </div>
          <p className="cursor-default">{`Selected file: ${photoToUpload?.name}`}</p>
        </div>
      </div>
      <Preview URL={currentImageURL} />
    </>
  )
}
export default Home
