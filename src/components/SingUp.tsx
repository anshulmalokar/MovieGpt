import { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/FireBase";
type Props = {};

export default function SingUp({}: Props) {
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState<String>("");

  const handleClick = () => {
    // @ts-ignore
    const res = checkValidData(email.current.value, password.current.value);
    if (res === "") {
      setError("");
      // @ts-ignore
      const email_value = email.current.value;
      // @ts-ignore
      const password_value = password.current.value;
      createUserWithEmailAndPassword(auth, email_value, password_value)
        .then(() => {
          if(auth.currentUser !== null){
            updateProfile(auth.currentUser,{
              // @ts-ignore
              displayName: name.current.value
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError( errorCode + " " +errorMessage);
        });
    } else {
      setError(res);
    }
  };

  return (
    <>
      <div
        className="w-full relative  bg-no-repeat bg-cover h-screen rounded-xl overflow-hidden bg-gradient-to-b from-black"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg')",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <div className="flex justify-center">
          <div className="bg-[rgba(0,0,0,0.7)] items-center mt-20 w-[300px] h-fit p-8 rounded-xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-7 text-white"
              action="#"
            >
              <span>SignUp</span>
              <span>Enter your name</span>
              <input
                ref={name}
                className="border-white"
                type="text"
                name="Email address"
                id="name"
                placeholder="Email or username"
              />
              <span>Enter your email address</span>
              <input
                ref={email}
                className="border-white"
                type="text"
                name="Email address"
                id=""
                placeholder="Email or email"
              />
              <span>Enter your password</span>
              <input
                ref={password}
                type="password"
                name="Password"
                id="password"
                placeholder="Password"
              />
              <button onClick={handleClick} className="p-4 m-4 bg-red-600">
                Sign Up
              </button>
              {error !== "" ? (
                <>
                  <span className="text-red-400">
                    Error wihle doing signup. Please check the provided email
                    and password
                  </span>
                </>
              ) : (
                <></>
              )}
              <p>
                Already have an account?{" "}
                <span
                  className="text-slate-600 hover:cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  SignIn
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
