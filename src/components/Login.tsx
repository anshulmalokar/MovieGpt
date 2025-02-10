import { useNavigate } from "react-router-dom";
import Header from "./Header";

type Props = {};

export default function Login({}: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/singup');
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
            <form className="flex flex-col gap-7 text-white" action="">
              <span>Sign In</span>
              <span>Enter your email address</span>
              <input
                className="border-white"
                type="text"
                name="Email address"
                id=""
                placeholder="Email or mobile number"
              />
              <span>Enter your password</span>
              <input
                type="password"
                name="Password"
                id=""
                placeholder="Password"
              />
              <button className="p-4 m-4 bg-red-600">Sign in</button>
              <p>
                Are you new to Netflix? <span className="text-slate-600 hover:cursor-pointer" onClick={handleClick}>Sign Up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
