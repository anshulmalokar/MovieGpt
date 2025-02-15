import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/FireBase";
type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState<String>("");
  const handleClick = () => {
    navigate("/singup");
  };

  const handleButtonClick = () => {
    // @ts-ignore
    const res = checkValidData(email.current.value, password.current.value);
    if (res === "") {
      setError("");
      // @ts-ignore
      const email_value = email.current.value;
      // @ts-ignore
      const password_value = password.current.value;
      signInWithEmailAndPassword(auth, email_value, password_value)
        .then(() => {
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      setError(res);
    }
  };

  return (
    <>
      <div
        className="w-full bg-no-repeat bg-cover h-screen rounded-xl overflow-hidden bg-gradient-to-b from-black"
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
              action="/"
            >
              <span>Sign In</span>
              <span>Enter your email address</span>
              <input
                ref={email}
                className="border-white"
                type="text"
                name="Email address"
                id=""
                placeholder="Email or mobile number"
              />
              <span>Enter your password</span>
              <input
                ref={password}
                type="password"
                name="Password"
                id=""
                placeholder="Password"
              />
              <button
                onClick={handleButtonClick}
                className="p-4 m-4 bg-red-600"
              >
                Sign in
              </button>
              {error !== "" ? (
                <span className="text-red-500">{`${error}`}</span>
              ) : (
                <></>
              )}
              <p>
                Are you new to Netflix?{" "}
                <span
                  className="text-slate-600 hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
