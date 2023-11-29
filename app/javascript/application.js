import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import ReactDOM from 'react-dom'
import App from './components/App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from "./store/store"
import { Provider } from "react-redux"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
)
