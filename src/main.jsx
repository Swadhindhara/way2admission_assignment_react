import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './sections/Layout'
import Home from './componants/Home/Home'
import Countries from './componants/Countries/Countries'
import Resources from './componants/Resources/Resources'
import Exams from './componants/Exams/Exams'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: '',
        element: <Home />
      },{
        path: "countries",
        element: <Countries />
      },
      {
        path: "exams",
        element: <Exams />
      },
      {
        path: "resources",
        element: <Resources />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
