import FormComponent from '../components/FormComponent'
const Signup = () => {
  return (
    <>
      <div className="wrapper flex items-center justify-center w-full h-full">
        <FormComponent
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
