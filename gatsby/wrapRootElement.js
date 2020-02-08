import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../src/styles/index.css"

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <ToastContainer autoClose={3000} />
  </>
)
