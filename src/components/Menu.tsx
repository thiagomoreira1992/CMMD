import {
  House,
  File,
  FilePlus,
  ArrowFatDown,
  ArrowFatUp,
  SignOut,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

type childData = {
  childToParent: (newType: string) => void;
};

function Menu({ childToParent }: childData) {
  return (
    <div
      className="fixed box-border md:h-screen md:scale-y-95 md:w-20 bg-white md:rounded-r-full   md:rounded-bl-none drop-shadow-md flex  md:flex-col justify-evenly py-10 items-center
            sm:h-20 sm:w-screen sm:scale-x-95 sm:scale-y-100 sm:rounded-b-full sm:rounded-tr-none sm:flex-row
        "
    >
      <House
        size="57"
        weight="light"
        color="#a3a3a3"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent cursor-pointer transition-all"
        onClick={() => childToParent("home")}
      />
      <File
        size="57"
        color="#a3a3a3"
        weight="light"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent cursor-pointer transition-all"
        onClick={() => childToParent("reports")}
      />{" "}
      <FilePlus
        size="57"
        weight="light"
        color="#a3a3a3"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent cursor-pointer transition-all"
        onClick={() => childToParent("register")}
      />
      <div 
              onClick={() => childToParent("home")}
      className=" flex h-[57px] w-[57px] rounded-xl justify-center items-center hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-white hover:border-l-white cursor-pointer transition-all">
        <ArrowFatUp
          size="36"
          weight="light"
          color="#a3a3a3"
          className="mt-6 -mr-3 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] "
        />
        <ArrowFatDown
          size="36"
          color="#a3a3a3"
          weight="light"
          className="mb-6 -ml-3 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)]"
        />
      </div>
      <SignOut
        size="57"
        weight="light"
        color="#a3a3a3"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent transition-all"
        onClick={() => childToParent("logout")}
      />
    </div>
  );
}

export default Menu;
