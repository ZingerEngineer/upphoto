import { UploadResult } from 'firebase/storage'
import { toast } from 'react-toastify'
interface FileData {
  uploadResults: UploadResult
  url: string
}
export const notifyMessage = (message: String) => toast(message)
export const notifySuccess = (message: String) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
export const notifyPromise = async (
  prom: Promise<FileData> | (() => Promise<FileData>)
) =>
  toast.promise(
    prom,
    {
      pending: 'Pending upload...',
      success: 'Upload completed.',
      error: 'Upload failed.'
    },

    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    }
  )
