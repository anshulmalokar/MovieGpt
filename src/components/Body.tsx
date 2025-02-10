import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SingUp from './SingUp'

type Props = {}

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="browse" element={<Browse />} />
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Route>
    )
  )

export default function Body({}: Props) {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}