import React from 'react'
import Greeting from './Greeting'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greeting/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App