import Menu from "../components/Menu";
import Register from "./MainContent/Register";
import Login from "./Login";
import { useEffect, useState } from "react";
import BestBefore from "./MainContent/BestBefore";
import Report from "./MainContent/Report";
import { useNavigate } from "react-router-dom";
import { WindowsLogo } from "phosphor-react";
import Search from "./MainContent/Search";



function Cmmd({ activeLink }) {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (activeLink) {
      if (activeLink !== link) {
        setLink(activeLink);
      } else {
        return;
      }
    }
  }),[link];

  const childToParent = (childdata) => {
    if (childdata !== "logout") {
      if (childdata === "main") {
        setLink("");
        navigate("/cmmd");
      } else {
        navigate(`/cmmd/${childdata}`);
      }
    } else {
      navigate(`/login`);
    }
  };

  function handleChangeRegister(link) {
    switch (link) {
      case "main":
        return <BestBefore />;
      case "":
        return <BestBefore />;
      case "reports":
        return <Report />;
      case "register":
        return <Register />;
      case "search":
        return <Search />;
      case "move":
        return <Report />;
      case "logout":
        navigate("/login");
    }
  }

  return (
    <div className="relative flex h-screen w-screen md:items-center md:justify-start sm:justify-center">
      <Menu childToParent={childToParent} />
      <div
        id={"mainPage"}
        className=" sm:h-[85%] md:h-[95%] sm:w-[95%] sm:ml-0 sm:mt-24 md:ml-24 md:mt-0 bg-white p-4 rounded-xl overflow-y-auto flex flex-col items-center"
      >
        {handleChangeRegister(link)}
      </div>
    </div>
  );
}

export default Cmmd;
