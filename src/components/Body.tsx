import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SingUp from "./SingUp";
import { useEffect } from "react";
import axios from "axios";

type Props = {};

const callApi = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{
    headers:{
      Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
      Accept: 'application/json'
    }
  });
  // @ts-ignore
  console.log(res.data.results);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="browse" element={<Browse />} />
      <Route path="/" element={<Login />} />
      <Route path="/singup" element={<SingUp />} />
    </Route>
  )
);

export default function Body({}: Props) {
  useEffect(() => {
    callApi();
  },[])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
