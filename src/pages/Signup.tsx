import FormComponent from '../components/FormComponent'
import FormComponentData from '../interfaces/FormComponentData'
import { signupUser } from '../utils/firebaseAuth'
import { notifyMessage, notifySuccess } from '../utils/toasts'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
const Signup = () => {
  const handleCallBack = async (formData: FormComponentData) => {
    try {
      await signupUser(formData.email, formData.password)
      notifySuccess('Signup complete.')
    } catch (error) {
      notifyMessage('Signup failed.')
      console.log(error)
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
          callBackDataFunction={handleCallBack}
          formLabel="Signup"
          userName={false}
          email={true}
          password={true}
          abortButtonLabel="Cancel"
          approveButtonLabel="Signup"
        />
      </div>
    </>
  )
}
export default Signup
