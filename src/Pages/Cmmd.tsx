import Menu from "../components/Menu";
import Register from "./MainContent/Register";
import Login from "./Login";
import { useState } from "react";
import BestBefore from "./MainContent/BestBefore";
import Report from "./MainContent/Report";

type typeCmmd = {
  activeLink: string;
}

function Cmmd({activeLink}:typeCmmd) {
  const [link, setLink] = useState<string>("");

  

() => {
  console.log(activeLink)
  if(activeLink){
    console.log(activeLink)
    if(activeLink !== link){
      setLink(activeLink)
    }
  }
}
  

  const childToParent = (childdata: string) => {
    setLink(childdata);
  };

  function handleChangeRegister(link: string) {
    switch (link) {
      case "":
        return <BestBefore />;
        case "home":
          return <BestBefore />;
      case "reports":
        return <Report />;
      case "register":
        return <Register />;
      case "logout":
        return <Login />;
    }
  }

  return (
    <div className="relative flex h-screen w-screen md:items-center md:justify-start sm:justify-center">
      <Menu childToParent={childToParent} />
      <div
        id={"mainPage"}
        className=" h-[95%] sm:ml-0 sm:mt-24 md:ml-24 md:mt-0 bg-white p-4 rounded-xl overflow-y-auto flex flex-col items-center"
      >
        {handleChangeRegister(link)}
      </div>
    </div>
  );
}

export default Cmmd;
