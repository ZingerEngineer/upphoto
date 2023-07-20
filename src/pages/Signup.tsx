import FormComponent from '../components/LoginSignupForm'
import LoginSignupFormData from '../interfaces/LoginSignupFormData'
import { signupUser } from '../utils/firebaseAuth'
import { notifyMessage, notifySuccess } from '../utils/toasts'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const handleCallBack = async (formData: LoginSignupFormData) => {
    try {
      if (!(formData.userName && formData.email && formData.password)) {
        notifyMessage('Fill in all fields.')
      } else {
        await signupUser(formData.userName, formData.email, formData.password)
        notifySuccess('Signup complete.')
      }
    } catch (error) {
      notifyMessage('Signup failed.')
    }
  }
  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
          formType="signup"
          callBackDataFunction={handleCallBack}
          formLabel="Signup"
          userName={true}
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
