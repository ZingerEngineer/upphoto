import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import ProgressList from '../components/ProgressList'
import { Firestore, addDoc, collection } from '@firebase/firestore'
import { db } from '../firebase'
import { useState, SetStateAction } from 'react'
interface stateActionValues {
  value: SetStateAction<File> | null
}
const Home = () => {
  const [photoToUpload, setPhotoToUpload] = useState(null)
  // const uploadPhoto = () => {
  //   collection(Firestore, 'temp')
  // }
  return (
    <>
      <NavBar />
      <div className="home-content text-white font-semibold flex flex-col flex-grow">
        <div className="upload-section w-full flex flex-col items-center bg-gray-900 py-8">
          <div className="m-2 flex flex-col items-center">
            <ArrowUpOnSquareIcon className="w-28 m-4" />
            <p>Upload your image or drag it over here.</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="file"
              id="files"
              className="Button px-4 py-2 w-fit h-fit rounded-l-md bg-violet-800 border-0 text-white font-sans font-semibold focus:outline-none hover:cursor-pointer hover:bg-violet-500 duration-100"
              onChange={(event) => {
                console.log(event)
              }}
            />
            <input
              type="text"
              name="filePath"
              id="filePath"
              className="block w-full py-2 outline-none rounded-r-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Paste URL here..."
            />
          </div>
        </div>
        <ProgressList></ProgressList>
      </div>
    </>
  )
}

export default Home
