import FormComponentData from './FormComponentData'
interface FormComponentProps {
  formLabel: string
  userName?: boolean
  email?: boolean
  password?: boolean
  abortButtonLabel: string
  approveButtonLabel: string
  callBackDataFunction?: (formData: FormComponentData) => void
}
export default FormComponentProps
