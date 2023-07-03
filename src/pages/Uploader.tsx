import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { notifyPromise } from '../utils/toasts'
import Spinner from '../components/Spinner'
import React, { useState, useRef, useEffect } from 'react'
import { uploadImage } from '../utils/firebase'
import Preview from '../components/Preview'
import Button from '../components/Button'
const Uploader = () => {
  const [isDragging, setIsDragging] = useState(0)
  const uploadSectionRef = useRef<HTMLDivElement | null>(null)
  const preventDefaultDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragStyleEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(1)
  }

  useEffect(() => {
    if (!uploadSectionRef.current) return

    if (isDragging) {
      uploadSectionRef.current.classList.add('bg-black')
      return
    }

    if (!isDragging) {
      uploadSectionRef.current.classList.remove('bg-black')
      return
    }
  }, [isDragging])

  const handleDragStyleLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(0)
  }
  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(0)
    setPhotoToUpload(event.dataTransfer.files[0])
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
      <div className="w-full h-full overflow-x-hidden overflow-y-auto">
        <ToastContainer />
        <NavBar />
        <div className="home-content flex flex-col font-semibold text-white w-[90%] mx-auto p-5">
          <div
            ref={uploadSectionRef}
            className="upload-section flex w-full flex-col  bg-black/50 p-8 border-dashed border-4 border-white/70 rounded-lg text-ellipsis text-center overflow-hidden whitespace-nowrap"
            onDrop={handleDropFile}
            onDragOver={preventDefaultDrag}
            onDragEnter={handleDragStyleEnter}
            onDragLeave={handleDragStyleLeave}
            onDragExit={preventDefaultDrag}
          >
            <div style={{ pointerEvents: isDragging ? 'none' : 'all' }}>
              <div
                onDragOver={preventDefaultDrag}
                className="m-2 flex flex-col items-center"
              >
                <ArrowUpOnSquareIcon className="m-4 w-28" />
                <p>Upload or drag your image over here.</p>
              </div>
              <div className="flex items-center justify-center">
                <input
                  className="hidden"
                  accept="image/*"
                  type="file"
                  id="files"
                  onChange={handleSelection}
                  ref={inputRef}
                />
                <div className="buttons flex flex-row">
                  <Button
                    buttonContent="Browse"
                    buttonFunction={handleBrowseClick}
                  />
                  <Button
                    buttonContent={loading ? <Spinner /> : 'Upload'}
                    buttonFunction={handleUploadClick}
                    buttonRef={uploadButtonRef}
                  />
                </div>
              </div>
              <p className="cursor-default text-ellipsis overflow-hidden whitespace-nowrap">
                {photoToUpload ? `Selected file: ${photoToUpload?.name}` : ''}
              </p>
            </div>
          </div>
        </div>
        <div className="preview-wrapper  w-[90%] mx-auto px-5 font-semibold text-white">
          {currentImageURL ? <Preview URL={currentImageURL} /> : ''}
        </div>
      </div>
    </>
  )
}
export default Uploader
