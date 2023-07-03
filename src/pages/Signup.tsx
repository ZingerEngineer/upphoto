import { useState } from 'react'
import FormComponent from '../components/FormComponent'
import { signupUser } from '../utils/firebaseAuth'
const Signup = () => {
  const [userData, setUserData] = useState({})
  const handleCallBack = (formData: object) => {
    console.log(formData)
    setUserData({ formData: formData })
    console.log(userData, 'from parent')
  }
  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
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
