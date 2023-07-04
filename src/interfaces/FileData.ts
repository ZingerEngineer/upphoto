import { UploadResult } from 'firebase/storage'
interface FileData {
  uploadResults: UploadResult
  url: string
}
export default FileData
