import FormComponent from '../components/LoginSignupForm'
import LoginSignupFormData from '../interfaces/LoginSignupFormData'
import { loginUser } from '../utils/firebaseAuth'
import { notifyMessage, notifySuccess } from '../utils/toasts'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const handleCallBack = async (formData: LoginSignupFormData) => {
    try {
      await loginUser(formData.email, formData.password)
      notifySuccess('Login complete.')
      navigate('/uploader')
    } catch (error) {
      notifyMessage('Login failed.')
    }
  }

  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
          formType="login"
          callBackDataFunction={handleCallBack}
          formLabel="Login"
          userName={false}
          email={true}
          password={true}
          abortButtonLabel="Cancel"
          approveButtonLabel="Login"
        />
      </div>
    </>
  )
}
export default Login
