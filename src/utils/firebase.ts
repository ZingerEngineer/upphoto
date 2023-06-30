import {
  UploadResult,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from 'firebase/storage'
interface FileData {
  uploadResults: UploadResult
  url: string
}
export const uploadImage = async (file: File): Promise<FileData> => {
  const storage = getStorage()
  const storageRef = ref(storage, file.name)
  const uploadResults = await uploadBytes(storageRef, file)
  const downloadURL = await getDownloadURL(storageRef)
  return {
    uploadResults,
    url: downloadURL
  }
}
