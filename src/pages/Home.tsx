import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import ProgressList from '../components/ProgressList'
import { useState } from 'react'

const Home = () => {
  const [photoToUpload, setPhotoToUpload] = useState<File | null>(null)

  // const uploadPhoto = () => {
  //   collection(Firestore, 'temp')
  // }

  return (
    <>
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
              className="Button h-fit w-fit rounded-l-md border-0 bg-violet-800 px-4 py-2 font-sans font-semibold text-white duration-100 hover:cursor-pointer hover:bg-violet-500 focus:outline-none"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const selectedFile = event.target.files?.[0]
                setPhotoToUpload(selectedFile || null)
                console.log(selectedFile)
              }}
            />
            <input
              type="text"
              name="filePath"
              id="filePath"
              className="block w-full rounded-r-md border-0 py-1.5 py-2 pl-7 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
