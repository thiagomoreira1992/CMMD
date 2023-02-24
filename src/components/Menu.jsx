import {
  House,
  File,
  FilePlus,
  ArrowFatDown,
  ArrowFatUp,
  SignOut,
  FileSearch,
  Swap,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";


function Menu({ childToParent }) {
  return (
    <div
      className="fixed box-border md:h-screen md:scale-y-95 md:w-20 bg-white 
      md:rounded-r-full   md:rounded-bl-none drop-shadow-md flex  md:flex-col 
      justify-evenly py-10 items-center sm:h-20 sm:w-screen  sm:scale-y-100 
      sm:rounded-b-full sm:rounded-tr-none sm:flex-row sm:px-10
        "
    >
      <House
        size={57}
        weight="light"
        color="#a3a3a3"
        className="min-w-10 min-h-10 max-w-14 max-h-14 bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent cursor-pointer transition-all"
        onClick={() => childToParent("main")}
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
      <FileSearch
        size="57"
        weight="light"
        color="#a3a3a3"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent cursor-pointer transition-all"
        onClick={() => childToParent("search")}
      />
      <Swap
        size="57"
        weight="light"
        color="#a3a3a3"
        className="bg-transparent rounded-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] hover:border hover:border-r-gray-400 hover:border-b-gray-400 hover:border-t-transparent hover:border-l-transparent transition-all"
        onClick={() => childToParent("move")}
      />
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
