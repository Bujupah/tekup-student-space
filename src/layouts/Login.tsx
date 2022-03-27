import React from "react"
import { Formik } from "formik"
import { toast } from "react-toastify"

export const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-600 to-blue-900 i justify-around items-center">
        <div>
          <img alt="Tek-up LOGO" className="text-white font-bold text-4xl font-sans" src="/images/tekup-logo.png"></img>
          <p className="text-white mt-1">Your gateway to your international opportunities</p>
          <button onClick={() => {
            window.open('https://tek-up.de', '_blank')
          }} type="submit" className="block w-36 bg-white text-blue-900 mt-4 py-2 rounded-2xl font-bold mb-2">Official website</button>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            // authSrv.login(values)
            toast.info('Under construction!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
          validate={(values) => {
            const errors: any = {}
            if (!values.username || values.username === "")
              errors.username = "Username is required"
            if (!values.password || values.password === "")
              errors.password = "Password is required"
            return errors;
          }}
        >
          {({
            errors,
            values,
            handleBlur,
            handleReset,
            handleChange,
            handleSubmit
          }) => {
            const { username, password } = values
            return (
              <form className="bg-white" onReset={handleReset} onSubmit={handleSubmit}>
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path style={{
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2"
                    }} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input className="pl-2 outline-none border-none"
                    type="email"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={username}
                    placeholder="Username"
                    aria-label="username"
                    autoComplete="none"
                    required
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }} d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none"
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={password}
                    placeholder="Password"
                    aria-label="password"
                    autoComplete="none"
                    required
                  />
                </div>
                <button type="submit" onSubmit={() => handleSubmit} className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
              </form>
            )
          }}
        </Formik>
      </div >
    </div >
  )
}