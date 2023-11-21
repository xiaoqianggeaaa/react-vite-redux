import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Button, FloatButton, Spin } from 'antd';
import BaseRouter from "@/router/router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <RouterProvider router={BaseRouter} />
  )
}

export default App
