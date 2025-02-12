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
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/FireBase";

type Props = {};

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
  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
