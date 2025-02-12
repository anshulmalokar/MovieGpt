import { signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
type Props = {};

export default function Header({}: Props) {
  const navigate = useNavigate();
  const user = auth.currentUser;
  return (
    <div className="w-full h-11 flex justify-between mt-2">
      <img
        className="ml-2"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        user !== null ? <div className="flex mr-3 gap-2">
        <img
         src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="icon" />
         <button
          onClick={() => {
            signOut(auth).then(() => {
              navigate("/");
            }).catch((error) => {
              console.log(error);
            });
          }}
          type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign Out</button>
        </div> : <></>
      }
    </div>
  );
}
