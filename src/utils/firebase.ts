import { getStorage, ref, uploadBytes } from 'firebase/storage'
export const uploadImage = async (file: File) => {
  const storage = getStorage()
  const storageRef = ref(storage, file.name)
  return uploadBytes(storageRef, file)
}
