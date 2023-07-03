import FormComponent from '../components/FormComponent'
const Login = () => {
  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
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
