import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import HomePage from './pages/home/home.page.jsx'
import JobPage from './pages/job/Job.page.jsx'
// import RootLayout from './components/shared/Navigation.jsx'
import RootLayout from './layouts/Root.layout.jsx'
import SignUpPage from './pages/sign-up.page.jsx';
import SignInPage from './pages/sign-in.page.jsx';
import MainLayout from './layouts/main.layout.jsx';
const router= createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
    {
      element:<MainLayout/>,
      children:[
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/jobs/:id',
          element: <JobPage/>
        },
      ]
    },
    {
      path: '/sign-up',
      element: <SignUpPage/>
    },{
      path: '/sign-in',
      element: <SignInPage/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
 