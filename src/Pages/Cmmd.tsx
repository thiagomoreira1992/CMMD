import Menu from "../components/Menu";
import CategoryRegister from "./MainContent/CategoryRegister";
import Register from "./MainContent/Register";

function Cmmd() {
  return (
    <div  className="relative flex h-screen w-screen md:items-center md:justify-start sm:justify-center">
      <Menu />
      <div id={"mainPage"} className=" h-[95%] sm:ml-0 sm:mt-24 md:ml-24 md:mt-0 bg-white p-4 rounded-xl overflow-y-auto flex flex-col items-center">
        <Register />
      </div>
    </div>
  );
}

export default Cmmd;
