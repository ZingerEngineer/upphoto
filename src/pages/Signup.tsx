import FormComponent from '../components/LoginSignupForm'
import LoginSignupFormData from '../interfaces/LoginSignupFormData'
import { signupUser } from '../utils/firebaseAuth'
import { notifyMessage, notifySuccess } from '../utils/toasts'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const handleCallBack = async (formData: LoginSignupFormData) => {
    try {
      await signupUser(formData.email, formData.password)
      notifySuccess('Signup complete.')
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
