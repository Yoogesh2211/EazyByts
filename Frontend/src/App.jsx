import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css'

import Home from './components/Home/Home'
import User from './components/User/User';

const Router = createBrowserRouter(
  [
    {path:"/",
      element:<Home/>,
    },
    {path:"/user",
      element:<User/>
    }
  ]
)

function App() {

  return (
      <RouterProvider router={Router}/>
  )
}

export default App
