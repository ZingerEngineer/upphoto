import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormComponentProps from '../interfaces/FormComponentProps'
import FormComponentData from '../interfaces/FormComponentData'

const FormComponent = ({
  formLabel,
  userName,
  email,
  password,
  abortButtonLabel,
  approveButtonLabel,

  callBackDataFunction
}: FormComponentProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const [userNameValue, setUserNameValue] = useState<string>('')
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [formData, setFormData] = useState<FormComponentData>()
  useEffect(() => {
    setFormData({
      userName: userNameValue,
      email: emailValue,
      password: passwordValue
    })
  }, [userNameValue, emailValue, passwordValue])
  const handleSignUp = () => {
    console.log(formData)

    if (callBackDataFunction && formData) callBackDataFunction(formData)
  }
  return (
    <form
      method="submit"
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-md flex-grow max-w-[70vmin] drop-shadow-[0px_0px_20px_rgb(0,0,0,0.2)]"
    >
      <div className="text-center mt-3">
        <p className="text-violet-600 font-bold text-3xl">{formLabel}</p>
      </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {userName ? (
            <div className="px-3 mt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    upphoto.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
                    placeholder="janesmith"
                    value={userNameValue}
                    onChange={(event) => setUserNameValue(event.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {email ? (
            <div className="px-3 mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 outline-none"
                  value={emailValue}
                  onChange={(event) => setEmailValue(event.target.value)}
                />
              </div>
            </div>
          ) : (
            ''
          )}

          {password ? (
            <div className="px-3 mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 outline-none pr-2"
                  value={passwordValue}
                  onChange={(event) => setPasswordValue(event.target.value)}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          to="/"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {abortButtonLabel}
        </Link>
        <button
          type="submit"
          className="rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSignUp}
        >
          {approveButtonLabel}
        </button>
      </div>
    </form>
  )
}
export default FormComponent
