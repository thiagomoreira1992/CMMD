import React, { useEffect, useState } from "react";
import RegisterMenu from "../../components/RegisterMenu";
import CategoryRegister from "./RegisterPages/CategoryRegister";
import MaterialRegister from "./RegisterPages/MaterialRegister";
import RecordRegister from "./RegisterPages/RecordRegister";


function Register(){
  const [link, setLink] = useState("registro");


  const childToParent = (childdata) => {
    setLink(childdata);
  };

  function handleChangeRegister(link) {
    switch (link) {
      case "categoria":
        return <CategoryRegister />;
      case "materiais":
        return <MaterialRegister />;
      case "registro":
        return <RecordRegister />;
    }
  }
  return (
    <React.Fragment>
      <main className="flex flex-col items-center pt-10 gap-10">
        <RegisterMenu childToParent={childToParent} />
        {handleChangeRegister(link)}
      </main>
    </React.Fragment>
  );
}

export default Register;
