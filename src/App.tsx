import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './layouts/Home';
import { Login } from './layouts/Login';
import { Dashboard } from './layouts/Dashboard';

import { authSrv } from './services';
import { NotFoundPage } from './pages/NotFoundPage';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthChecker
          login={
            <Routes>
              <Route caseSensitive={true} path='/' element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          }
          home={

            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          }
          Dashboard={

            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          }
        />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider >

  )
}

interface AuthCheckerProps {
  login: JSX.Element;
  home: JSX.Element;
  Dashboard: JSX.Element;

}

const AuthChecker = (props: AuthCheckerProps) => {
  const { isLoading, error, data } = useQuery('auth', () =>
    authSrv.ping()
  )

  if (isLoading) {
    return (
      <>
        <div className='app-container bg-blue-900'>
          <img src='/images/tekup-logo.png'></img>
          <div className="flex items-center justify-center mt-8 mb-2">
            <div className="w-8 h-8 border-b-2 border-white rounded-full animate-spin"></div>
          </div>
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (!!error) {
    return (
      <>
        <div className='app-container'>
          Failed to communicate with server
        </div>
      </>
    )
  }

  if (data?.status !== 200) {
    console.log('Logged!', data)
    return props.login
  }

  return props.Dashboard
}

export default App;
